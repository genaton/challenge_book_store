// import "./style.css";
import logo from "../../img/logo_bookmark.svg";
import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.img`
  display: flex;
  align-items: center;
  width: 50px;
  margin-right: 10px;
`;

const BrandContainer = styled.p`
  display: flex; 
  align-items: center;
  font-size: 30px;
  font-family: "PMingLiu-Extb";
  /* color: #05023a;s */
  color: #837cfb;
`;

function Logo() {
  return (
    <LogoContainer>
      <LogoImg src={logo} alt="logo challenge book store"></LogoImg>
      <BrandContainer>BOOKMARK</BrandContainer>
    </LogoContainer>
  );
}
export default Logo;
