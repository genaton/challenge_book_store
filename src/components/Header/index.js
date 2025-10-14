import Logo from "../Logo";
import OpcoesHeader from "../OpcoesHeader";
import styled from "styled-components";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Pesquisa from "../Pesquisa";
import AdicionarLivro from "../AdicionarLivros";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaBars } from "react-icons/fa";

function Header({ onSearch, onAddLivro }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [adicionarAberto, setAdicionarAberto] = useState(false);
  const [pesquisaAberta, setPesquisaAberta] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);

  const mostrarPesquisa = location.pathname === "/minha-estante";
  const mostrarAdicionar = location.pathname === "/minha-estante";

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
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
        <Row className="align-items-center justify-content-center position-relative">
          <Col className="d-flex align-items-center justify-content-center gap-4">
            {/* Logo */}
            <div
              onClick={handleLogoClick}
              className="d-flex align-items-center"
              style={{ cursor: "pointer", textDecoration: "none" }}
            >
              <Logo />
            </div>

            {/* Botão de menu sanduíche para mobile */}
            {isMobile ? (
              <button
                onClick={() => setMenuAberto(!menuAberto)}
                className="btn btn-outline-secondary"
              >
                <FaBars />
              </button>
            ) : (
              <>
                {/* Opções padrão para desktop */}
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
                      onAdd={onAddLivro}
                      isAberto={adicionarAberto}
                      onAbertoChange={setAdicionarAberto}
                      onAbrir={handleAbrirAdicionar}
                      pesquisaAberta={pesquisaAberta}
                    />
                  </div>
                )}
              </>
            )}

            {/* Menu sanduíche expandido */}
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
                  <div>
                    <AdicionarLivro
                      onAdd={onAddLivro}
                      isAberto={adicionarAberto}
                      onAbertoChange={setAdicionarAberto}
                      onAbrir={handleAbrirAdicionar}
                      pesquisaAberta={pesquisaAberta}
                    />
                  </div>
                )}
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;