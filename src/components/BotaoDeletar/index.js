import styled from "styled-components";
import { deleteLivro } from "../../services/livros"; 
const Button = styled.button`
  margin-top: 10px;
  background-color: #d32f2f;
  color: white;
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
  const handleClick = async () => {
    const confirmacao = window.confirm(
      "Tem certeza que deseja excluir este livro?\nEssa ação não poderá ser desfeita."
    );
    if (!confirmacao) return;

    const sucesso = await deleteLivro(livroId);
    if (sucesso) {
      onDelete(livroId);
    } else {
      alert("Erro ao excluir o livro.");
    }
  };

  return <Button onClick={handleClick}>Excluir livro</Button>;
}

export default BotaoDeletar;


