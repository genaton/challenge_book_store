import Logo from "../Logo";
import OpcoesHeader from "../OpcoesHeader";
import styled from "styled-components";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Pesquisa from "../Pesquisa";
import AdicionarLivro from "../AdicionarLivros";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

// const HeaderContainer = styled.header`
//   background-color: #fff;
//   box-shadow: 0 2px 10px rgba(0,0,0,0.1);
//   padding: 15px 0;
//   position: relative;
//   z-index: 100;
// `;

// const HeaderWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 0 20px;
//   position: relative;
//   min-height: 60px;
// `;

// const CentralSection = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 40px;
// `;

// const RightSection = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 15px;
//   position: absolute;
//   right: 20px;
//   top: 50%;
//   transform: translateY(-50%);
// `;

function Header({ onSearch, onAddLivro }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [adicionarAberto, setAdicionarAberto] = useState(false);
  const [pesquisaAberta, setPesquisaAberta] = useState(false);

  const mostrarPesquisa = location.pathname === "/minha-estante";
  const mostrarAdicionar = location.pathname === "/minha-estante";

  const handleLogoClick = (e) => {
    e.preventDefault();
    navigate("/", { replace: true });
    setTimeout(() => {
      window.location.href = "/";
    }, 100);
  };

  const handleAbrirPesquisa = () => {
    if (adicionarAberto) {
      setAdicionarAberto(false);
    }
    setPesquisaAberta(true);
  };

  const handleAbrirAdicionar = () => {
    if (pesquisaAberta) {
      setPesquisaAberta(false);
    }
    setAdicionarAberto(true);
  };

  return (
    <header className="bg-white shadow-sm py-3 position-relative z-3">
      <Container>
        <Row
          className="align-items-center justify-content-center position-relative"
          style={{ minHeight: "60px" }}
        >
          <Col xs="auto" className="d-flex align-items-center gap-4">
            <div
              onClick={handleLogoClick}
              style={{ cursor: "pointer", textDecoration: "none" }}
            >
              <Logo />
            </div>
            <OpcoesHeader />
          </Col>
          <Col className="d-flex align-items-center">
            {(mostrarPesquisa || mostrarAdicionar) && (
          <div
                className="d-flex align-items-center position-absolute"
                style={{ right: 20, top: "50%", transform: "translateY(-50%)" }}
              >
                {mostrarAdicionar && onAddLivro && (
                  <AdicionarLivro
                    onAdd={onAddLivro}
                    isAberto={adicionarAberto}
                    onAbertoChange={setAdicionarAberto}
                    onAbrir={handleAbrirAdicionar}
                    pesquisaAberta={pesquisaAberta}
                  />
                )}
              </div>
            )}
              <div className="d-flex align-items-center position-absolute"
                // style={{ right: 50, top: "50%", transform: "translateY(-50%)" }}
                >
              {mostrarPesquisa && onSearch && (
                <Col>
                <Pesquisa
                  onSearch={onSearch}
                  isAberta={pesquisaAberta}
                  onAbertaChange={setPesquisaAberta}
                  onAbrir={handleAbrirPesquisa}
                />
                </Col>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
