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

function MinhaEstante({ livros }) {
  // const [livros, setLivros] = useState([]);
  // const [livrosFiltrados, setLivrosFiltrados] = useState([]);

  // useEffect(() => {
  //   async function fetchLivros() {
  //     const livrosDaAPI = await getLivros();
  //     setLivros(livrosDaAPI);
  //     setLivrosFiltrados(livrosDaAPI); // exibe todos inicialmente
  //   }
  //   fetchLivros();
  // }, []);
  // const handleSearch = (texto) => {
  //   const textoFormatado = String(texto || "").toLowerCase();

  //   const resultado = livros.filter((livro) => {
  //     const tituloFormatado = String(livro?.titulo || "").toLowerCase();
  //     return tituloFormatado.includes(textoFormatado);
  //   });

  //   setLivrosFiltrados(resultado);
  // };

  return (
    <>
      {/* <Header onSearch={handleSearch} /> */}
      <ResultadosLivros livros={livros} />
      <Footer />
    </>
  );
}

export default MinhaEstante;
