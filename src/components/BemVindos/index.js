import styled from "styled-components";
import Titulo from "../Titulo";
import Card from "../Card";
import fundo1 from '../../img/fundo1.jpg';
import fundo2 from '../../img/fundo2.jpg';
import fundo3 from '../../img/fundo3.jpg';
import fundo4 from '../../img/fundo4.jpg';
import fundo5 from '../../img/fundo5.jpg';
import fundo6 from '../../img/fundo6.jpg';
import fundo7 from '../../img/fundo7.jpg';
import fundo8 from '../../img/fundo8.jpg';
import fundo9 from '../../img/fundo9.jpg';
import fundo10 from '../../img/fundo10.jpg';
import fundo11 from '../../img/fundo11.jpg';
import fundo12 from '../../img/fundo12.jpg';

const BemVindosContainer = styled.section`
  background-color: #837cfb;
  padding: 24px 0 64px 0;   /* ↓ respiro mais elegante */
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const CarouselWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 16px auto 0;      /* aproxima do título */

  .carousel {
    background: transparent !important;
    border: none !important;
  }

  .carousel-inner {
    background: transparent !important;
    border: none !important;
    padding: 0 !important;
    margin: 0 !important;
  }

  .carousel-item {
    background: transparent !important;
    border: none !important;
  }

  .carousel-control-prev,
  .carousel-control-next {
    width: 44px;            /* ↓ botão um pouco menor */
    height: 44px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0.95;
    border: 1px solid rgba(255,255,255,0.6); /* borda mais suave */
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    transition: all 0.3s ease;

    &:hover {
      opacity: 1;
      background: white;
      transform: translateY(-50%) scale(1.06);
    }
  }

  .carousel-control-prev { left: -25px; }
  .carousel-control-next { right: -25px; }

  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    width: 20px;
    height: 20px;
    background-size: 20px 20px;
    filter: invert(30%) sepia(50%) saturate(500%) hue-rotate(220deg);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }

  .carousel-indicators {
    margin-bottom: -28px;   /* ↑ não “encosta” tanto na borda */

    button {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      border: 2px solid white;
      background: transparent;
      transition: transform .15s ease;

      &.active {
        background: white;
        transform: scale(1.1);
      }
    }
  }
`;

const SlideRow = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  gap: 16px;                /* ↓ cards mais coesos */
  padding: 10px;
  overflow-x: hidden;
`;

const chamadas = [
  { id: 1, titulo: "Explorar o Digital", descricao: "O futuro do conhecimento é digital, explore-o!", imagemFundo: fundo1 },
  { id: 2, titulo: "Novas Possibilidades", descricao: "Aqui cada página abre novas possibilidades!", imagemFundo: fundo2 },
  { id: 3, titulo: "Ideias que Iluminam", descricao: "Ideias que iluminam, histórias que permanecem, transforme sua curiosidade em aprendizado", imagemFundo: fundo3 },
  { id: 4, titulo: "Descubra e Transforme", descricao: "Descubra. Inspire-se. Transforme-se", imagemFundo: fundo4 },
  { id: 5, titulo: "Sem Fronteiras", descricao: "Leitura sem fronteiras para mentes sem limites", imagemFundo: fundo5 },
  { id: 6, titulo: "Um Clique Muda Tudo", descricao: "Um clique pode mudar sua forma de ver o mundo.", imagemFundo: fundo6 },
  { id: 7, titulo: "Chave para Novos Mundos", descricao: "A leitura é a chave que abre novos mundos", imagemFundo: fundo7 },
  { id: 8, titulo: "Universo de Conhecimento", descricao: "Um universo de conhecimento a um clique de distância!", imagemFundo: fundo8 },
  { id: 9, titulo: "Abra Horizontes", descricao: "Abra um livro, abra horizontes", imagemFundo: fundo9 },
  { id: 10, titulo: "Conecte-se com Sabedoria", descricao: "Conecte-se com a sabedoria de séculos em cada leitura", imagemFundo: fundo10 },
  { id: 11, titulo: "Viagem Intelectual", descricao: "Embarque numa viagem intelectual sem sair do lugar", imagemFundo: fundo11 },
  { id: 12, titulo: "Tesouro Literário", descricao: "Descubra tesouros literários esperando por você", imagemFundo: fundo12 }
];

function BemVindos() {
  const slides = [];
  for (let i = 0; i < chamadas.length; i += 4) {
    slides.push(chamadas.slice(i, i + 4));
  }

  return (
    <BemVindosContainer>
      <Titulo>BEM-VINDOS À BOOKMARK</Titulo>

      <CarouselWrapper>
        <div id="carouselChamadas" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#carouselChamadas"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="carousel-inner">
            {slides.map((slide, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                <SlideRow>
                  {slide.map(chamada => (
                    <Card
                      key={chamada.id}
                      titulo={chamada.titulo}
                      descricao={chamada.descricao}
                      imagemFundo={chamada.imagemFundo}
                    />
                  ))}
                </SlideRow>
              </div>
            ))}
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#carouselChamadas" data-bs-slide="prev" aria-label="Anterior">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Anterior</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselChamadas" data-bs-slide="next" aria-label="Próximo">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Próximo</span>
          </button>
        </div>
      </CarouselWrapper>
    </BemVindosContainer>
  );
}

export default BemVindos;