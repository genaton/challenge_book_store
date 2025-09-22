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

function MinhaEstante({ livros, onUpdate, onDelete }) {
  return (
    <>
      <ResultadosLivros livros={livros} 
      onUpdate={onUpdate}
      onDelete={onDelete}/>
      
    </>
  );
}

export default MinhaEstante;
