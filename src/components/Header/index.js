import "./style.css";
import Logo from "../Logo";
import OpcoesHeader from "../OpcoesHeader";
import IconesHeader from "../IconesHeader";
// import Pesquisa from "../Pesquisa";
import styled from "styled-components";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

// const HeaderContainer = styled.header.attrs(() => ({
//   className: "d-flex justify-content-center align-items-center pt-3 bg-white",
// }))

const HeaderContainer = styled.header`
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <Logo />
      </Link>
      <OpcoesHeader />
      {/* <IconesHeader /> */}
      {/* <Pesquisa/> */}
    </HeaderContainer>
  );
}

export default Header;
