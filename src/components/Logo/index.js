// import "./style.css";
import logo from "../../img/logo_bookmark.svg";
import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%; /* ✅ Garante que ocupe toda a altura */
`;

const LogoImg = styled.img`
  width: 50px;
  height: 50px; /* ✅ Altura fixa para controle */
  object-fit: contain; /* ✅ Mantém proporção */
`;

const BrandContainer = styled.span` /* ✅ Mudei para span */
  font-size: 30px;
  font-family: "PMingLiu-Extb";
  color: #837cfb;
  line-height: 1; /* ✅ Remove espaçamento extra */
  display: flex;
  align-items: center;
`;

function Logo() {
  return (
    <LogoContainer>
      <LogoImg src={logo} alt="logo challenge book store" />
      <BrandContainer>BOOKMARK</BrandContainer>
    </LogoContainer>
  );
}

export default Logo;