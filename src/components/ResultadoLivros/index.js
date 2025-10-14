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
  transition: all 0.3s ease;

  p {
    margin-top: 1px;
    font-size: 0.95em;
    font-weight: 700;
    text-transform: capitalize;
    text-align: center;
    max-width: 100%;
    word-wrap: break-word;
    white-space: normal;
    transition: color 0.3s ease;
  }

  img {
    width: 180px;
    height: 250px;
    object-fit: cover;
    border-radius: 4px;
    transition: all 0.3s ease;
  }

  &:hover {
    transform: scale(1.05);
    border: 1px solid #837cfb;
    border-radius: 15px;
    background: rgba(131, 124, 251, 0.1);
    
    p {
      color: #6a5acd;
    }
    
    /* Efeito suave na imagem sem conflito */
    img {
      filter: brightness(1.1);
    }
  }

  /* DESATIVA O HOVER QUANDO O MODAL ESTIVER ABERTO */
  &.modal-aberto:hover {
    transform: none;
    border: none;
    border-radius: 0;
    background-color: transparent;
    
    p {
      color: #837cfb;
    }
    
    img {
      filter: none;
    }
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
        <Resultado key={livro.id} data-livro-id={livro.id}>
          <p>{livro.titulo}</p>
          <img src={livro.imagem} alt={`Capa de ${livro.titulo}`} />
          
          {/* CONTAINER PARA OS BOTÕES LADO A LADO */}
          <div style={{ 
            display: 'flex', 
            gap: '8px', 
            justifyContent: 'center',
            alignItems: 'flex-end',
            marginTop: '10px',
            width: '100%',
            height: '60px'
          }}>
            <BotaoDeletar livroId={livro.id} onDelete={onDelete} />
            <BotaoAlterarLivro livroId={livro.id} onUpdate={onUpdate} />
          </div>
        </Resultado>
      ))}
    </ResultadoContainer>
  );
}

export default ResultadosLivros;