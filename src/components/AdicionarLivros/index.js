import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { postLivro, getLivros } from "../../services/livros";
import { toast } from "react-toastify";
import { FaPlus, FaTimes } from "react-icons/fa";

// ==== Styled Components ====
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
  border-radius: ${props => props.compacto ? "50%" : "10px"};
  padding: ${props => props.compacto ? "0" : "8px 16px"};
  font-weight: 600;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.compacto ? "0" : "12px"};
  width: ${props => props.compacto ? "45px" : "auto"};
  height: ${props => props.compacto ? "45px" : "auto"};
  font-size: ${props => props.compacto ? "inherit" : "1rem"};
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(131,124,251,0.3);

  &:hover {
    background: linear-gradient(135deg, #6a5acd 0%, #5a4cbf 100%);
    transform: translateY(-2px);
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

// ==== Modal ====
const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  animation: ${fadeIn} 0.3s ease forwards;
`;

const Modal = styled.div`
  background: white;
  border-radius: 15px;
  padding: 25px;
  width: 320px;
  text-align: center;
  box-shadow: 0 8px 30px rgba(0,0,0,0.3);
  animation: ${fadeIn} 0.3s ease forwards;
`;

const ModalImg = styled.img`
  width: 120px;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
  margin: 15px 0;
  box-shadow: 0 4px 10px rgba(0,0,0,0.15);
`;

const ModalButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
`;

const BotaoModal = styled.button`
  border: none;
  border-radius: 8px;
  padding: 8px 15px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s ease;
  ${({ tipo }) =>
    tipo === "confirmar"
      ? `
    background: linear-gradient(135deg, #837cfb 0%, #6a5acd 100%);
    color: white;
    &:hover { background: linear-gradient(135deg, #6a5acd 0%, #5a4cbf 100%); }
  `
      : `
    background: #eee;
    color: #555;
    &:hover { background: #ddd; }
  `}
`;

// ==== Componente principal ====
// OBS: você pode importar como `AdicionarLivros` no Header sem problemas.
// (o nome da export default aqui é só o identificador do componente)
function AdicionarLivro({ onAdd, isAberto, onAbertoChange, onAbrir, pesquisaAberta, livros = [] }) {
  const [titulo, setTitulo] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [capa, setCapa] = useState(null);
  const [livroEncontrado, setLivroEncontrado] = useState(null);

  useEffect(() => {
    if (!isAberto) setTitulo("");
  }, [isAberto]);

  const handleAbrir = () => {
    onAbrir();
    onAbertoChange(true);
  };

  // Normaliza string (remove acentos, espaços, minusculas)
  const normalize = (str) =>
    str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim();

  // Busca capa no Google Books
  const buscarCapa = async (titulo) => {
    try {
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=intitle:${encodeURIComponent(titulo)}&maxResults=5`
      );
      const data = await res.json();
      if (!data.items || data.items.length === 0) return null;

      const livroValido = data.items.find(item =>
        item.volumeInfo.title?.toLowerCase().includes(titulo.toLowerCase())
      );

      if (!livroValido) return null;

      const livroInfo = livroValido.volumeInfo;
      setCapa(livroInfo.imageLinks?.thumbnail || "https://via.placeholder.com/120x180?text=Sem+Capa");
      setLivroEncontrado(livroInfo);

      return livroInfo;
    } catch {
      return null;
    }
  };

  const handleSubmit = async () => {
    const tituloLimpo = String(titulo).trim();
    if (!tituloLimpo) return;

    // 1) Verifica duplicado ANTES do modal
    //    Usa a lista vinda do Header; se não veio, busca no backend (fallback seguro).
    let base = Array.isArray(livros) ? livros : [];
    if (base.length === 0) {
      try {
        base = await getLivros();
      } catch {
        base = [];
      }
    }

    const duplicado = base.some(
      (l) => normalize(l.titulo) === normalize(tituloLimpo)
    );

    if (duplicado) {
      // bloqueia sem abrir modal de confirmação
      toast.error("⚠️ Este livro já está na sua estante!");
      return;
    }

    // 2) Busca no Google Books e abre modal de confirmação
    const livro = await buscarCapa(tituloLimpo);
    if (!livro) {
      toast.error("❌ Livro não encontrado!");
      return;
    }

    setShowModal(true);
  };

  const confirmarAdicao = async () => {
    try {
      // Checagem de segurança (caso a lista tenha mudado entre digitar e confirmar)
      let base = Array.isArray(livros) ? livros : [];
      if (base.length === 0) {
        try {
          base = await getLivros();
        } catch {
          base = [];
        }
      }
      const duplicado = base.some(
        (l) => normalize(l.titulo) === normalize(titulo)
      );
      if (duplicado) {
        toast.warning("⚠️ Este livro já está na sua estante!");
        setShowModal(false);
        return;
      }

      const novoLivro = await postLivro(titulo);
      if (novoLivro) {
        onAdd?.(novoLivro);
        setTitulo("");
        onAbertoChange?.(false);
        setShowModal(false);
        toast.success("📚 Livro adicionado com sucesso!");
      }
    } catch {
      toast.error("❌ Não foi possível adicionar o livro.");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSubmit();
    if (e.key === "Escape") {
      onAbertoChange?.(false);
      setTitulo("");
    }
  };

  return (
    <Container>
      {!isAberto ? (
        pesquisaAberta ? (
          <BotaoPrincipal compacto onClick={handleAbrir}>
            <FaPlus size={16} />
          </BotaoPrincipal>
        ) : (
          <BotaoPrincipal onClick={handleAbrir}>
            <FaPlus size={20} /> Adicionar
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
              border: "none",
              borderRadius: "20px",
              padding: "8px 0",
              width: "280px",
              outline: "none",
              fontSize: "20px",
            }}
            autoFocus
          />
          <BotaoConfirmar onClick={handleSubmit}>✓</BotaoConfirmar>
          <BotaoCancelar onClick={() => { onAbertoChange?.(false); setTitulo(""); }}>
            <FaTimes size={15} />
          </BotaoCancelar>
        </InputContainer>
      )}

      {/* Modal */}
      {showModal && (
        <Overlay onClick={() => setShowModal(false)}>
          <Modal onClick={(e) => e.stopPropagation()}>
            <h3>Confirmar adição</h3>
            {livroEncontrado && (
              <>
                <p>{livroEncontrado.title}</p>
                {capa && <ModalImg src={capa} alt={livroEncontrado.title} />}
              </>
            )}
            <ModalButtons>
              <BotaoModal tipo="confirmar" onClick={confirmarAdicao}>✅ Confirmar</BotaoModal>
              <BotaoModal tipo="cancelar" onClick={() => setShowModal(false)}>❌ Cancelar</BotaoModal>
            </ModalButtons>
          </Modal>
        </Overlay>
      )}
    </Container>
  );
}

export default AdicionarLivro;