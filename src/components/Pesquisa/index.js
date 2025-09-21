import Input from "../Input/index.js";
import styled from "styled-components";
import { useState } from "react";
import { getLivros } from "../../services/livros.js";
import { useEffect } from "react";

const PesquisaContainer = styled.section`
  color: #ffffffff;
  text-align: center;
  padding-left:10px ;

  
`;

const Titulo = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;

const Subtitulo = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;



function Pesquisa({onSearch}) {
   const [livros, setLivros] = useState([]);

  useEffect(() => {
    async function fetchLivros() {
    const livrosDaAPI = await getLivros();
    setLivros(livrosDaAPI);
  }
  
    fetchLivros();
  }, []);

    function handleBlur(evento) {
    const textoDigitado = evento.target.value;
    const resultadoPesquisa = livros.filter((livro) =>
      livro.titulo.toLowerCase().includes(textoDigitado.toLowerCase())
    );
    onSearch(resultadoPesquisa);
  }
 

  return (
    <PesquisaContainer>
      {/* <Titulo>Já sabe por onde começar?</Titulo> */}
      {/* <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo> */}
      <Input
        placeholder="Escreva sua próxima leitura"
        onBlur={handleBlur}
        />
            </PesquisaContainer>
  );
}

export default Pesquisa;
