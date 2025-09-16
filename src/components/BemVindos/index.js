import styled from "styled-components";
import Titulo from "../Titulo";
import Pesquisa from "../Pesquisa";

const BemVindosContainer = styled.section`
  background-color: #837cfb;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const NovosLivrosContainer = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: pointer;
`;
function BemVindos() {
  return (
    <BemVindosContainer>
            <Titulo>BEM-VINDOS À BOOKMARK</Titulo>
            <NovosLivrosContainer>
              <Pesquisa/>
                {/* { livros.map( livro => (
                    <img src={livro.src}/>
                ) ) } */}
            </NovosLivrosContainer>
        </BemVindosContainer>

  )
}
export default BemVindos;
