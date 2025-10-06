import { useState } from "react";
import styled from "styled-components";
import { postLivro } from "../../services/livros";
import { toast } from "react-toastify";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;

  input {
    margin-left: 10px;
    padding: 8px;
    font-size: 0.9em;
    border-radius: 4px;
    border: 1px solid #ccc;
    width: 250px;
  }

  button {
    background-color: #4caf50;
    color: white;
    border: none;
    padding: 8px 12px;
    border-radius: 4px;
    font-size: 1em;
    cursor: pointer;

    &:hover {
      background-color: #388e3c;
    }
  }

  .icone {
    font-size: 1.5em;
    background: none;
    border: none;
    cursor: pointer;
    color: #333;
  }
`;

function AdicionarLivro({ onAdd }) {
  const [expandido, setExpandido] = useState(false);
  const [titulo, setTitulo] = useState("");

  const handleSubmit = async () => {
    const tituloLimpo = String(titulo).trim();
    if (!tituloLimpo) return;

    try {
      const novoLivro = await postLivro(tituloLimpo);
      if (novoLivro) {
        onAdd(novoLivro);
        setTitulo("");
        setExpandido(false);
        toast.success("📚 Livro adicionado com sucesso!");
      }
    } catch (error) {
      console.error("Erro ao adicionar livro:", error.response.data.erro);
      toast.error(
        "❌ Erro ao adicionar livro. " + error.response.data.erro
      );
    }
  };

  return (
    <Container>
      {!expandido ? (
        <button className="icone" onClick={() => setExpandido(true)}>
          ＋
        </button>
      ) : (
        <>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            placeholder="inclua o título de sua próxima leitura"
          />
          <button onClick={handleSubmit}>Adicionar</button>
        </>
      )}
    </Container>
  );
}

export default AdicionarLivro;
