import { useState } from "react";
import styled from "styled-components";
import { updateLivro } from "../../services/livros";
import { FaEdit } from "react-icons/fa";

const Button = styled.button`
  background-color: #1976d2;
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
    background-color: #1565c0;
    opacity: 1;
  }
`;

const EditContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;

  input {
    padding: 4px 8px;
    font-size: 0.8em;
    border-radius: 4px;
    border: 1px solid #ccc;
    width: 100%;
    max-width: 200px;
  }

  button {
    background-color: #1976d2;
    color: white;
    border: none;
    padding: 6px 12px;
    border-radius: 4px;
    font-size: 0.8em;
    cursor: pointer;

    &:hover {
      background-color: #1565c0;
    }
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

  return (
    <>
      {!editando ? (
        <Button onClick={() => setEditando(true)}>
          <FaEdit size={14} />
        </Button>
      ) : (
        <EditContainer>
          <input
            type="text"
            value={novoTitulo}
            onChange={(e) => setNovoTitulo(e.target.value)}
            placeholder="Novo título"
          />
          <button onClick={handleSubmit}>Salvar</button>
        </EditContainer>
      )}
    </>
  );
}

export default BotaoAlterarLivro;