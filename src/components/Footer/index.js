import styled from "styled-components";
// import 'bootstrap/dist/css/bootstrap.min.css';


// const FooterContainer = styled.footer.attrs(()=>({
//     className: 'd-flex justify-content-center align-itens-center bg-black text-white text-center py-3 '
// }))
const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333;
  color: #fff;
  padding: 20px 0;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;

`;

function Footer() {
  return (
    <FooterContainer>
      <div>
        <p>FOOTER VEM AQUI</p>
      </div>
    </FooterContainer>
  );
}

export default Footer;
