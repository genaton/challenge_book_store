import Logo from "../Logo";
import OpcoesHeader from "../OpcoesHeader";
import { useLocation, useNavigate } from "react-router-dom";
import Pesquisa from "../Pesquisa";
import AdicionarLivro from "../AdicionarLivros";
import LoginMenu from "../LoginMenu";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";

// Barra em grid: [esquerda vazia] [miolo central] [login à direita]
const GridBar = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  position: relative;
  width: 100%;
`;

// Miolo central (mantém gap e largura máxima, centralizado)
const CenterWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 0 auto;
  max-width: 1100px; /* ajuste se quiser mais/menos largura */
`;

// Direita: login encostado
const RightWrap = styled.div`
  justify-self: end;
  display: flex;
  align-items: center;
`;

function Header({ onSearch, onAddLivro, livros }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [adicionarAberto, setAdicionarAberto] = useState(false);
  const [pesquisaAberta, setPesquisaAberta] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);

  const mostrarPesquisa = location.pathname === "/minha-estante";
  const mostrarAdicionar = location.pathname === "/minha-estante";

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogoClick = (e) => {
    e.preventDefault();
    navigate("/", { replace: true });
    setTimeout(() => {
      window.location.href = "/";
    }, 100);
  };

  const handleAbrirPesquisa = () => {
    if (adicionarAberto) setAdicionarAberto(false);
    setPesquisaAberta(true);
  };

  const handleAbrirAdicionar = () => {
    if (pesquisaAberta) setPesquisaAberta(false);
    setAdicionarAberto(true);
  };

  return (
    <header className="bg-white shadow-sm py-3 position-relative z-3">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col className="position-relative w-100">
            {/* DESKTOP: grid com centro real e login à direita */}
            {!isMobile ? (
              <GridBar>
                {/* Coluna 1 (vazia) mantém centragem perfeita */}
                <div />

                {/* Coluna 2: miolo central */}
                <CenterWrap>
                  {/* Logo */}
                  <div
                    onClick={handleLogoClick}
                    className="d-flex align-items-center"
                    style={{ cursor: "pointer", textDecoration: "none" }}
                  >
                    <Logo />
                  </div>

                  {/* Opções, pesquisa e adicionar */}
                  <div className="d-flex align-items-center">
                    <OpcoesHeader />
                  </div>

                  {mostrarPesquisa && onSearch && (
                    <div className="d-flex align-items-center">
                      <Pesquisa
                        onSearch={onSearch}
                        isAberta={pesquisaAberta}
                        onAbertaChange={setPesquisaAberta}
                        onAbrir={handleAbrirPesquisa}
                      />
                    </div>
                  )}

                  {mostrarAdicionar && onAddLivro && (
                    <div className="d-flex align-items-center">
                      <AdicionarLivro
                        livros={livros}
                        onAdd={onAddLivro}
                        isAberto={adicionarAberto}
                        onAbertoChange={setAdicionarAberto}
                        onAbrir={handleAbrirAdicionar}
                        pesquisaAberta={pesquisaAberta}
                      />
                    </div>
                  )}
                </CenterWrap>

                {/* Coluna 3: login à direita */}
                <RightWrap>
                  <LoginMenu />
                </RightWrap>
              </GridBar>
            ) : (
              // MOBILE: como você já tinha, com menu sanduíche
              <div className="d-flex align-items-center justify-content-between">
                <div
                  onClick={handleLogoClick}
                  className="d-flex align-items-center"
                  style={{ cursor: "pointer", textDecoration: "none" }}
                >
                  <Logo />
                </div>
                <button
                  onClick={() => setMenuAberto(!menuAberto)}
                  className="btn btn-outline-secondary"
                  aria-label="Abrir menu"
                >
                  <FaBars />
                </button>
              </div>
            )}

            {/* Menu mobile expandido (igual ao seu fluxo atual) */}
            {isMobile && menuAberto && (
              <div className="position-absolute top-100 start-50 translate-middle-x bg-white shadow rounded p-3 mt-2 z-2">
                <div className="mb-2">
                  <OpcoesHeader />
                </div>
                {mostrarPesquisa && onSearch && (
                  <div className="mb-2">
                    <Pesquisa
                      onSearch={onSearch}
                      isAberta={pesquisaAberta}
                      onAbertaChange={setPesquisaAberta}
                      onAbrir={handleAbrirPesquisa}
                    />
                  </div>
                )}
                {mostrarAdicionar && onAddLivro && (
                  <div className="mb-2">
                    <AdicionarLivro
                      livros={livros}
                      onAdd={onAddLivro}
                      isAberto={adicionarAberto}
                      onAbertoChange={setAdicionarAberto}
                      onAbrir={handleAbrirAdicionar}
                      pesquisaAberta={pesquisaAberta}
                    />
                  </div>
                )}
                <div>
                  <LoginMenu />
                </div>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;