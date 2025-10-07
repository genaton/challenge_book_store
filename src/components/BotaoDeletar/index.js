import styled from "styled-components";
import { deleteLivro } from "../../services/livros";
import { toast } from "react-toastify";
import { useState } from "react";
import ModalConfirmacao from "../ModalConfirmacao"; // ajuste o caminho conforme necessário

const Button = styled.button`
  margin-top: 10px;
  background-color: #f11212ff;
  color: white;
  font-weight: 600;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 0.8em;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #b71c1c;
  }
`;

function BotaoDeletar({ livroId, onDelete }) {
  const [mostrarModal, setMostrarModal] = useState(false);

  const handleClick = () => {
    setMostrarModal(true);
  };

  const confirmarExclusao = async () => {
    setMostrarModal(false);
    const sucesso = await deleteLivro(livroId);
    if (sucesso) {
      onDelete(livroId);
      toast.success("❌  Livro exclído com sucesso!");
    } else {
      alert("Erro ao excluir o livro.");
    }
  };

  const cancelarExclusao = () => {
    setMostrarModal(false);
  };

  return (
    <>
      <Button onClick={handleClick}>Excluir livro</Button>
      <ModalConfirmacao
        show={mostrarModal}
        onConfirm={confirmarExclusao}
        onCancel={cancelarExclusao}
      />
    </>
  );
}

export default BotaoDeletar;