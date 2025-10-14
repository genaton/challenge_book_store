import { useState, useEffect } from "react";
import { getLivros } from "../services/livros";
import ResultadosLivros from "../components/ResultadoLivros";
import styled from "styled-components";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

function MinhaEstante({livros, onUpdate, onDelete }) {
  const [livrosEstante, setLivrosEstante] = useState(livros);
  useEffect(() => {
    async function fetchLivros() {
      const livrosDaAPI = await getLivros();
      setLivrosEstante(livrosDaAPI);
    }
    fetchLivros();
  }, [])

  return (
    <>
      <ResultadosLivros livros={livros}
      onUpdate={onUpdate}
      onDelete={onDelete}/>      
    </>
  );
}

export default MinhaEstante;
