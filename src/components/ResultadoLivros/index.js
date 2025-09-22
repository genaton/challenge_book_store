import styled from "styled-components";
import { useState, useEffect  } from "react";
import BotaoDeletar from "../BotaoDeletar/index.js";
import BotaoAlterarLivro from "../BotaoUpdate/index.js";

const ResultadoContainer = styled.section`
  padding: 40px;
  background-color: #f5f5f5;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
`;

const Resultado = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  padding: 1em;
  width: auto;
  cursor: pointer;
  transition: transform 0.2s;

  p {
    margin-top: 1px;
    font-size: 0.75em;
    text-transform: capitalize;
    text-align: center;
    max-width: 100%;
    word-wrap: break-word;
    white-space: normal;
  }

  img {
    width: 250px;
    height: auto;
    border-radius: 4px;
  }

  &:hover {
    transform: scale(1.05);
    border: 1px solid red;
  }
`;

function ResultadosLivros({ livros, onDelete, onUpdate }) {
  if (!livros || livros.length === 0) return null;

  const livrosOrdenados = [...livros].sort((a, b) =>
    String(a.titulo || "").toLowerCase().localeCompare(String(b.titulo || "").toLowerCase())
  );

  return (
    <ResultadoContainer>
      {livrosOrdenados.map((livro) => (
        <Resultado key={livro.id}>
          <p>{livro.titulo}</p>
          <img src={livro.imagem} alt={`Capa de ${livro.titulo}`} />
          <BotaoDeletar livroId={livro.id} onDelete={onDelete} />
          <BotaoAlterarLivro livroId={livro.id} onUpdate={onUpdate} />
        </Resultado>
      ))}
    </ResultadoContainer>
  );
}

export default ResultadosLivros;