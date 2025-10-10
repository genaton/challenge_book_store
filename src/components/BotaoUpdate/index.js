import { useState } from "react";
import styled from "styled-components";
import { updateLivro } from "../../services/livros";
import { FaEdit, FaTimes } from "react-icons/fa";

const Button = styled.button`
  background-color: #837cfb;
  color: white;
  border: none;
  padding: 8px;
  border-radius: 4px;
  font-size: 0.8em;
  cursor: pointer;
  transition: all 0.2s;
  opacity: 0.5;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;

  &:hover {
    background-color: #837cfb;
    opacity: 1;
  }
`;

const EditContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  width: 100%;
`;

const BotoesContainer = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  width: 100%;
`;

const BotaoSalvar = styled.button`
  background-color: #837cfb;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 0.8em;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 28px;
  min-width: 60px;
  transition: all 0.2s;

  &:hover {
    background-color: #736cf1;
  }
`;

const BotaoCancelar = styled.button`
  background-color: #6c757d;
  color: white;
  border: none;
  padding: 6px;
  border-radius: 4px;
  font-size: 0.8em;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 28px;
  width: 28px;
  transition: all 0.2s;

  &:hover {
    background-color: #5a6268;
  }
`;

function BotaoAlterarLivro({ livroId, onUpdate }) {
  const [editando, setEditando] = useState(false);
  const [novoTitulo, setNovoTitulo] = useState("");

  const handleSubmit = async () => {
    if (!novoTitulo.trim()) return;

    const sucesso = await updateLivro(livroId, novoTitulo);
    if (sucesso) {
      onUpdate(livroId, novoTitulo);
      setEditando(false);
      setNovoTitulo("");
    } else {
      alert("Erro ao atualizar o título.");
    }
  };

  const handleCancelar = () => {
    setEditando(false);
    setNovoTitulo("");
  };

  return (
    <>
      {!editando ? (
        <Button onClick={() => setEditando(true)}>
          <FaEdit size={14} />
        </Button>
      ) : (
        <EditContainer>
          <InputContainer>
            <input
              type="text"
              value={novoTitulo}
              onChange={(e) => setNovoTitulo(e.target.value)}
              placeholder="Novo título"
              style={{
                padding: '4px 8px',
                fontSize: '0.8em',
                borderRadius: '4px',
                border: '1px solid #ccc',
                width: '100%',
                maxWidth: '200px'
              }}
            />
            <BotoesContainer>
              <BotaoSalvar onClick={handleSubmit}>
                Salvar
              </BotaoSalvar>
              <BotaoCancelar onClick={handleCancelar}>
                <FaTimes size={12} />
              </BotaoCancelar>
            </BotoesContainer>
          </InputContainer>
        </EditContainer>
      )}
    </>
  );
}

export default BotaoAlterarLivro;