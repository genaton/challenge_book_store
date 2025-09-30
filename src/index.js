import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Home from "./routes/Home";
import MinhaEstante from "./routes/MinhaEstante";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { getLivros, postLivro } from "./services/livros";
import reportWebVitals from "./reportWebVitals";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

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
      String(livro?.titulo || "")
        .toLowerCase()
        .includes(textoFormatado)
    );
    setLivrosFiltrados(resultado);
  };

  const mostrarPesquisa = location.pathname === "/minha-estante";

  const handleUpdate = (id, novoTitulo) => {
    setLivros((prev) =>
      prev.map((livro) =>
        livro.id === id ? { ...livro, titulo: novoTitulo } : livro
      )
    );
    setLivrosFiltrados((prev) =>
      prev.map((livro) =>
        livro.id === id ? { ...livro, titulo: novoTitulo } : livro
      )
    );
  };

  const handleDelete = (id) => {
    setLivros((prev) => prev.filter((livro) => livro.id !== id));
    setLivrosFiltrados((prev) => prev.filter((livro) => livro.id !== id));
  };

  const mostrarAdicionar = location.pathname === "/minha-estante";

  const handleAddLivro = async (titulo) => {
    if (typeof titulo !== "string") {
      console.warn("handleAddLivro recebeu título corrompido:", titulo);
      return;
    }

    const novoLivro = await postLivro(titulo);
    if (novoLivro) {
      const livrosAtualizados = await getLivros();
      setLivros(livrosAtualizados);

      // Reaplica o filtro atual
      const textoAtual = String(
        document.querySelector("input")?.value || ""
      ).toLowerCase();
      const resultado = livrosAtualizados.filter((livro) =>
        String(livro?.titulo || "")
          .toLowerCase()
          .includes(textoAtual)
      );
      setLivrosFiltrados(resultado);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Header
        onSearch={mostrarPesquisa ? handleSearch : undefined}
        onAddLivro={mostrarAdicionar ? handleAddLivro : undefined}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/minha-estante"
          element={
            <MinhaEstante
              livros={livrosFiltrados}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          }
        />
      </Routes>
      <Footer />
      <ToastContainer position="top-right" autoClose={3000} />
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
