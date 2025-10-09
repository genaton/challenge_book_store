import Logo from "../Logo";
import OpcoesHeader from "../OpcoesHeader";
import styled from "styled-components";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Pesquisa from "../Pesquisa";
import AdicionarLivro from "../AdicionarLivros";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

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
        <Row className="align-items-center justify-content-center position-relative">
          {/* UMA ÚNICA COLUNA - Tudo centralizado */}
          <Col className="d-flex align-items-center justify-content-center gap-4">
            {/* Logo */}
            <div
              onClick={handleLogoClick}
              className="d-flex align-items-center"
              style={{ cursor: "pointer", textDecoration: "none" }}
            >
              <Logo />
            </div>

            {/* Botão Minha Estante */}
            <div className="d-flex align-items-center">
              <OpcoesHeader />
            </div>

            {/* Pesquisa e Adicionar (quando aplicável) */}
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
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
