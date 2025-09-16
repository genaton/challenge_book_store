import "./style.css";
import styled from "styled-components";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";



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
  text-decoration: none;
`;

// const textoOpcoes = ["CATEGORIAS", "FAVORITOS", "MINHA ESTANTE"];
const textoOpcoes = ["MINHA ESTANTE"];

function OpcoesHeader() {
  return (
    <OpcoesHeaderContainer>
      {textoOpcoes.map((texto, i) => (
      <OpcaoHeaderContainer>
         <Link to={`/${texto.toLowerCase()}`}><p>{texto}</p></Link> 
        </OpcaoHeaderContainer>
      ))}
    </OpcoesHeaderContainer>
  );
}

export default OpcoesHeader;

