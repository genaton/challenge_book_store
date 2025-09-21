import "./style.css";
import Logo from "../Logo";
import OpcoesHeader from "../OpcoesHeader";
import IconesHeader from "../IconesHeader";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import Pesquisa from "../Pesquisa";



const HeaderContainer = styled.header`
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Header({onSearch}) {
  const location = useLocation();
  const mostrarPesquisa = location.pathname ==="/minha-estante"
  return (
    <HeaderContainer>
      <Link to="/">
        <Logo />
      </Link>
      <OpcoesHeader />
      {mostrarPesquisa && onSearch && <Pesquisa onSearch={onSearch}/>}    
     
     
    </HeaderContainer>
  );
}

export default Header;
