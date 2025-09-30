import styled from "styled-components";

const CardContainer = styled.div`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
  transition: all 0.3s ease;
  width: 100%;
  max-width: auto;
  min-height: 380px;
  flex-direction: column;
  margin: 0 auto;

  }
`;

const ImagemContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
`;

const ImagemFundo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${CardContainer}:hover & {
    transform: scale(1.05);
  }
`;

const ConteudoCard = styled.div`
  padding: 25px 20px;
  text-align: center;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: white;
`;

const TituloChamada = styled.h5`
  color: #333;
  font-size: 1.3rem;
  margin-bottom: 12px;
  font-weight: bold;
  line-height: 1.3;
`;

const DescricaoChamada = styled.p`
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 0;
`;

function Card({ titulo, descricao, imagemFundo }) {
  return (
    <CardContainer>
      <ImagemContainer>
        <ImagemFundo src={imagemFundo} alt={titulo} />
      </ImagemContainer>
      <ConteudoCard>
        <TituloChamada>{titulo}</TituloChamada>
        <DescricaoChamada>{descricao}</DescricaoChamada>
      </ConteudoCard>
    </CardContainer>
  );
}

export default Card;