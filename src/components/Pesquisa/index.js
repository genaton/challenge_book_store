// src/componentes/Pesquisa.js

import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import Input from "../Input";

import "bootstrap/dist/css/bootstrap.min.css";

const PesquisaConteiner = styled.section`
  display: flex;
  align-items: center;

  width: auto;
  padding: 0;
  margin: 0;

  /* justify-content: center; */
  /* padding: 85px 0; */
  /* background-color: #f5f5f5; */
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
`;

function Pesquisa() {
  const [showInput, setShowInput] = useState(false);
  const [searchTerm, setSearchTerm] = useState([]);
  const inputRef = useRef(null);

  const handleToggle = () => {
    setShowInput((prev) => !prev);
  };

  // Fecha o campo se clicar fora
  useEffect(() => {
    function handleClickOutside(event) {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setShowInput(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <PesquisaConteiner>
      <SearchWrapper ref={inputRef}>
        <FaSearch
          size={24}
          style={{ cursor: "pointer", color: "#05023a" }}
          onClick={handleToggle}
        />
        <Input
          type="text"
          placeholder="Digite o nome do livro"
          expanded={showInput}
          onChange={(evento) => setSearchTerm(evento.target.value)}
          //   onBlur={()=> setShowInput(false)}
          //   onBlur={evento => {
          //     const textoDigitado = evento.target.value;
          //     const resultadoPesquisa = bancoDeDados.filter( dado => dado.nome.includes(textoDigitado) )
          //     setSearchTerm(resultadoPesquisa)

          //   }}
        />

        {/* {searchTerm.map((dado) => (
          <div>
            <p>{dado.nome}</p>
            <img src={dado.src} />
          </div>
        ))} */}
      </SearchWrapper>
    </PesquisaConteiner>
  );
}

export default Pesquisa;
