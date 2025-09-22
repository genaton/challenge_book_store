import Input from "../Input";
import styled from "styled-components";

const PesquisaContainer = styled.section`
  color: #fff;
  text-align: center;
  padding-left: 10px;
`;

function Pesquisa({ onSearch }) {
  function handleBlur(evento) {
    const textoDigitado = evento.target.value;
    onSearch(textoDigitado); // envia o texto para o index.js
  }

  return (
    <PesquisaContainer>
      <Input
        placeholder="Escreva sua próxima leitura"
        onBlur={handleBlur}
      />
    </PesquisaContainer>
  );
}

export default Pesquisa;