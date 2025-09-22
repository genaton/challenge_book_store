import { useState } from "react";
import styled from "styled-components";
import { updateLivro } from "../../services/livros"; // ajuste o caminho

const Wrapper = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    margin-top: 6px;
    padding: 4px 8px;
    font-size: 0.8em;
    border-radius: 4px;
    border: 1px solid #ccc;
  }

  button {
    margin-top: 6px;
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
    <Wrapper>
      {!editando ? (
        <button onClick={() => setEditando(true)}>Alterar título</button>
      ) : (
        <>
          <input
            type="text"
            value={novoTitulo}
            onChange={(e) => setNovoTitulo(e.target.value)}
            placeholder="Novo título"
          />
          <button onClick={handleSubmit}>Salvar</button>
        </>
      )}
    </Wrapper>
  );
}


export default BotaoAlterarLivro;