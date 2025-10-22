import styled from "styled-components";

const CardContainer = styled.div`
  width: 300px;
  height: 530px;
  flex-shrink: 0;
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
`;

const ImagemContainer = styled.div`
  width: 100%;
  height: 190px;
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
  padding: 18px 18px 22px;
  text-align: center;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  background: white;
`;

const TituloChamada = styled.h5`
  color: #837cfb;
  font-size: 24px;
  margin: 0;
  font-weight: 700;
  line-height: 1.35;
`;

const DescricaoChamada = styled.p`
  color: #666;
  font-size: 16px;
  line-height: 1.6;
  margin: 0;
`;

/* CTA opcional */
const CTAWrapper = styled.div`
  margin-top: 6px;
  display: flex;
  justify-content: center;
`;

const CTAButton = styled.button`
  border: none;
  border-radius: 22px;
  padding: 10px 14px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  background: linear-gradient(135deg, #837cfb 0%, #6a5acd 100%);
  color: #fff;
  box-shadow: 0 6px 16px rgba(131,124,251,.28);
  transition: transform .15s ease, box-shadow .15s ease, opacity .15s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 20px rgba(131,124,251,.36);
    opacity: .98;
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 4px 12px rgba(131,124,251,.25);
  }
`;

function Card({
  titulo,
  descricao,
  imagemFundo,
  ctaLabel,        // texto do botão (ex: "Explorar títulos")
  onCtaClick,      // handler opcional
  ctaHref,         // link opcional; se existir, usa window.open
  ctaTarget = "_self",
}) {
  const handleCta = (e) => {
    if (onCtaClick) {
      onCtaClick(e);
      return;
    }
    if (ctaHref) {
      window.open(ctaHref, ctaTarget);
    }
  };

  return (
    <CardContainer>
      <ImagemContainer>
        <ImagemFundo src={imagemFundo} alt={titulo} loading="lazy" />
      </ImagemContainer>
      <ConteudoCard>
        <TituloChamada>{titulo}</TituloChamada>
        <DescricaoChamada>{descricao}</DescricaoChamada>

        {ctaLabel && (onCtaClick || ctaHref) && (
          <CTAWrapper>
            <CTAButton onClick={handleCta}>{ctaLabel}</CTAButton>
          </CTAWrapper>
        )}
      </ConteudoCard>
    </CardContainer>
  );
}

export default Card;