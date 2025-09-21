import styled from "styled-components";

const ResultadoContainer = styled.section`
  padding: 40px;
  background-color: #f5f5f5;
`;

const Resultado = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;

  p {
    width: 200px;
  }

  img {
    width: 200px;
  }

  &:hover {
    border: 1px solid red;
  }
`;

function ResultadosLivros({ livros }) {
  if (!livros || livros.length === 0) return null;

  return (
    <ResultadoContainer>
      {livros.map((livro) => (
        <Resultado key={livro.id}>
          <img src={livro.imagem} alt={`Capa de ${livro.titulo}`} />
          <p>{livro.titulo}</p>
        </Resultado>
      ))}
    </ResultadoContainer>
  );
}

export default ResultadosLivros;
