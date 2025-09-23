import "./style.css";
import Logo from "../Logo";
import OpcoesHeader from "../OpcoesHeader";
import IconesHeader from "../IconesHeader";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import Pesquisa from "../Pesquisa";
import AdicionarLivro from "../AdicionarLivros";



const HeaderContainer = styled.header`
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Header({onSearch, onAddLivro}) {
  const location = useLocation();
  
  const mostrarPesquisa = location.pathname ==="/minha-estante"
  const mostrarAdicionar = location.pathname === "/minha-estante";

  return (
    <HeaderContainer>
      <Link to="/">
        <Logo />
      </Link>
      <OpcoesHeader />
      {mostrarPesquisa && onSearch && <Pesquisa onSearch={onSearch}/>}
      {mostrarAdicionar && onAddLivro && <AdicionarLivro onAdd={onAddLivro} />}
    
     
     
    </HeaderContainer>
  );
}

export default Header;
