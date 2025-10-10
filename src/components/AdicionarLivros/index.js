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

const BotaoPrincipal = styled.button`
  background: linear-gradient(135deg, #837cfb 0%, #6a5acd 100%);
  border: none;
  border-radius: ${props => props.compacto ? '50%' : '10px'};
  padding: ${props => props.compacto ? '0' : '8px 16px'};
  font-weight: 600;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.compacto ? '0' : '12px'};
  width: ${props => props.compacto ? '45px' : 'auto'};
  height: ${props => props.compacto ? '45px' : 'auto'};
  white-space: nowrap;
  font-size: ${props => props.compacto ? 'inherit' : '1rem'};
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(131, 124, 251, 0.3);

  &:hover {
    background: linear-gradient(135deg, #6a5acd 0%, #5a4cbf 100%);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(131, 124, 251, 0.4);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 10px rgba(131, 124, 251, 0.3);
  }
`;

const BotaoConfirmar = styled.button`
  background: linear-gradient(135deg, #837cfb 0%, #6a5acd 100%);
  border: none;
  border-radius: 5px;
  padding: 4px 10px;
  font-size: 12px;
  color: white;
  transition: all 0.2s ease;

  &:hover {
    background: linear-gradient(135deg, #6a5acd 0%, #5a4cbf 100%);
    transform: scale(1.05);
  }
`;

const BotaoCancelar = styled.button`
  background: transparent;
  border: 1px solid #837cfb;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #837cfb;
  transition: all 0.2s ease;

  &:hover {
    background: #837cfb;
    color: white;
    transform: scale(1.1);
  }
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
      toast.error("Erro ao adicionar livro. " + error.response.data.erro);
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
        // ✅ BOTÃO COM HOVER
        pesquisaAberta ? (
          <BotaoPrincipal compacto onClick={handleAbrir}>
            <FaPlus size={16} />
          </BotaoPrincipal>
        ) : (
          <BotaoPrincipal onClick={handleAbrir}>
            <FaPlus size={20} />
            Adicionar
          </BotaoPrincipal>
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
          <BotaoConfirmar onClick={handleSubmit}>
            ✓
          </BotaoConfirmar>
          <BotaoCancelar onClick={() => {
            onAbertoChange(false);
            setTitulo("");
          }}>
            <FaTimes size={15} />
          </BotaoCancelar>
        </InputContainer>
      )}
    </Container>
  );
}

export default AdicionarLivro;