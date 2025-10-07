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
  color: #837cfb;
  padding: 1em;
  width: auto;
  cursor: pointer;
  transition: transform 0.2s;

  p {
    margin-top: 1px;
    
    font-size: 0.95em;
    font-weight: 700;
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
    border: 1px solid #837cfb;
    border-radius: 15px;
    background: linear-gradient(135deg, #79a5d1ff   0%, #837cfb 100%);
    color: #fff ;
    box-shadow: 0 10px 30px rgba(0,0,0,0.25);
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