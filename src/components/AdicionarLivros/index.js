import { useState, useEffect } from "react";
import styled from "styled-components";
import { postLivro } from "../../services/livros";
import { toast } from "react-toastify";
import { FaPlus, FaTimes } from 'react-icons/fa';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background: white;
  border-radius: 25px;
  padding: 5px 15px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  border: 1px solid #ddd;
`;

function AdicionarLivro({ onAdd, isAberto, onAbertoChange, onAbrir, pesquisaAberta }) {
  const [titulo, setTitulo] = useState("");

  useEffect(() => {
    if (!isAberto) {
      setTitulo("");
    }
  }, [isAberto]);

  const handleAbrir = () => {
    onAbrir();
    onAbertoChange(true);
  };

  const handleSubmit = async () => {
    const tituloLimpo = String(titulo).trim();
    if (!tituloLimpo) return;

    try {
      const novoLivro = await postLivro(tituloLimpo);
      if (novoLivro) {
        onAdd(novoLivro);
        setTitulo("");
        onAbertoChange(false);
        toast.success("📚 Livro adicionado com sucesso!");
      }
    } catch (error) {
      console.log(error.status);
      console.error("Erro ao adicionar livro: " + error.response.data.erro);
      if(error.status === 404) {
        toast.error("❌ Erro ao encontrar ao capa do livro.");
      } else{
        toast.error("Erro ao adicionar livro. " + error.response.data.erro);
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSubmit();
    if (e.key === 'Escape') {
      onAbertoChange(false);
      setTitulo("");
    }
  };

  return (
    <Container>
      {!isAberto ? (
        // ✅ BOTÃO COMPACTO QUANDO PESQUISA ESTÁ ABERTA
        pesquisaAberta ? (
          <button 
            className="btn btn-success d-flex align-items-center justify-content-center"
            onClick={handleAbrir}
            style={{
              background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
              border: 'none',
              borderRadius: '50%',
              width: '45px',
              height: '45px',
              padding: '0',
              fontWeight: '600'
            }}
          >
            <FaPlus size={16} />
          </button>
        ) : (
          // ✅ BOTÃO NORMAL QUANDO PESQUISA ESTÁ FECHADA
          <button 
            className="btn btn-success d-flex align-items-center gap-3"
            onClick={handleAbrir}
            style={{
              background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
              border: 'none',
              borderRadius: '10px',
              padding: '8px 16px',
              fontWeight: '600',
              whiteSpace: 'nowrap',
              fontSize: '1rem'
            }}
          >
            <FaPlus size={20} />
            Adicionar
          </button>
        )
      ) : (
        <InputContainer>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Título do livro..."
            style={{
              border: 'none',
              borderRadius: '20px',
              padding: '8px 0',
              width: '280px',
              outline: 'none',
              fontSize: '20px',
            }}
            autoFocus
          />
          <button 
            onClick={handleSubmit}
            className="btn btn-primary btn-sm"
            style={{
              borderRadius: '5px',
              padding: '4px 10px',
              fontSize: '12px',
            }}
          >
            ✓
          </button>
          <button 
            onClick={() => {
              onAbertoChange(false);
              setTitulo("");
            }}
            className="btn btn-outline-secondary btn-sm"
            style={{
              borderRadius: '50%',
              width: '25px',
              height: '25px',
              padding: '0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <FaTimes size={15} />
          </button>
        </InputContainer>
      )}
    </Container>
  );
}

export default AdicionarLivro;