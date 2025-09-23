import { useState, useEffect } from "react";
import { getLivros } from "../services/livros";
import Footer from "../components/Footer";
import Pesquisa from "../components/Pesquisa";
import Header from "../components/Header";
import ResultadosLivros from "../components/ResultadoLivros";


import styled from "styled-components";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

function MinhaEstante({ onUpdate, onDelete }) {
  const [livros, setLivros] = useState([]);
  useEffect(() => {
    async function fetchLivros() {
      const livrosDaAPI = await getLivros();
      setLivros(livrosDaAPI);
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
