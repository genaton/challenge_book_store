import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Home from "./routes/Home";
import MinhaEstante from "./routes/MinhaEstante";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { getLivros } from "./services/livros";
import reportWebVitals from "./reportWebVitals";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-decoration: none;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  li {
    list-style: none;
  }
`;

function App() {
  const location = useLocation();
  const [livros, setLivros] = useState([]);
  const [livrosFiltrados, setLivrosFiltrados] = useState([]);

  useEffect(() => {
    async function fetchLivros() {
      const livrosDaAPI = await getLivros();
      setLivros(livrosDaAPI);
      setLivrosFiltrados(livrosDaAPI);
    }
    fetchLivros();
  }, []);

  const handleSearch = (textoDigitado) => {
    const textoFormatado = String(textoDigitado || "").toLowerCase();
    const resultado = livros.filter((livro) =>
      String(livro?.titulo || "").toLowerCase().includes(textoFormatado)
    );
    setLivrosFiltrados(resultado);
  };

  const mostrarPesquisa = location.pathname === "/minha-estante";

  return (
    <>
      <GlobalStyle />
      <Header onSearch={mostrarPesquisa ? handleSearch : undefined} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/minha-estante" element={<MinhaEstante livros={livrosFiltrados} />} />
      </Routes>
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();