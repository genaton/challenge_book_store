import "./style.css";
import styled from "styled-components";

const OpcoesHeaderContainer = styled.ul`
  display: flex;
`;

const OpcaoHeaderContainer = styled.li`
  min-width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 16px;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
`;

const textoOpcoes = ["CATEGORIAS", "FAVORITOS", "MINHA ESTANTE"];

function OpcoesHeader() {
  return (
    <OpcoesHeaderContainer>
      {textoOpcoes.map((texto) => (
        <OpcaoHeaderContainer>
          <p>{texto}</p>
        </OpcaoHeaderContainer>
      ))}
    </OpcoesHeaderContainer>
  );
}

export default OpcoesHeader;
