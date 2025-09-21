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

function MinhaEstante() {
  const [livros, setLivros] = useState([]);
  const [livrosFiltrados, setLivrosFiltrados] = useState([]);
  
  useEffect(() => {
    async function fetchLivros() {
      const livrosDaAPI = await getLivros();
      setLivros(livrosDaAPI);
      setLivrosFiltrados(livrosDaAPI); // exibe todos inicialmente
    }
    fetchLivros();
  }, []);
   const handleSearch = (texto) => {
    const resultado = livros.filter((livro) =>
      livro.titulo.toLowerCase().includes(texto.toLowerCase())
    );
    setLivrosFiltrados(resultado);
  };





  return (
     <>
      <Header onSearch={handleSearch} />
      <ResultadosLivros livros={livrosFiltrados} />
      <Footer />
    </>

  );
}

export default MinhaEstante;
