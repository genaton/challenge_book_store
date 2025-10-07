import { useState } from "react";
import styled from "styled-components";
import { updateLivro } from "../../services/livros";
import ModalEditarTitulo from "../ModalEditarTitulo"; 
import { toast } from "react-toastify";

const Wrapper = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

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
  const [mostrarModal, setMostrarModal] = useState(false);

  const handleAbrirModal = () => setMostrarModal(true);
  const handleFecharModal = () => setMostrarModal(false);

  const handleConfirmar = async (novoTitulo) => {
    const sucesso = await updateLivro(livroId, novoTitulo);
    if (sucesso) {
      onUpdate(livroId, novoTitulo);
      handleFecharModal();
      toast.success("✅ Livro atualizado com sucesso!");
      
    } else {
      alert("Erro ao atualizar o título.");
    }
  };

  return (
    <Wrapper>
      <button onClick={handleAbrirModal}>Alterar título</button>
      <ModalEditarTitulo
        show={mostrarModal}
        onClose={handleFecharModal}
        onConfirm={handleConfirmar}
      />
    </Wrapper>
  );
}

export default BotaoAlterarLivro;