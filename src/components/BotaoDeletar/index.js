import styled from "styled-components";
import { deleteLivro } from "../../services/livros";
import { toast } from "react-toastify";
import ModalConfirmacao from "../ModalConfirmacao"; // ajuste o caminho conforme necessário
import { FaTrash } from "react-icons/fa";
import { useState, useEffect } from "react";
import ReactDOM from 'react-dom';

const Button = styled.button`
  margin-top: 10px;
  background-color: #f11212ff;
  color: white;
  font-weight: 600;
  border: none;
  padding: 8px;
  border-radius: 4px;
  font-size: 0.8em;
  cursor: pointer;
  transition: all 0.2s;
  opacity: 0.5;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;

  &:hover {
    background-color: #b71c1c;
    opacity: 1;
  }
`;

// Componente do Modal SEPARADO que sempre usa portal
const ModalPortal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    }}>
      <div style={{
        background: 'white',
        padding: '20px',
        borderRadius: '8px',
        maxWidth: '400px',
        width: '90%'
      }}>
        <h3 style={{ margin: '0 0 16px 0', color: '#333' }}>Confirmar Exclusão</h3>
        <p style={{ margin: '0 0 24px 0', color: '#666' }}>
          Tem certeza que deseja excluir este livro?<br />
          Esta ação não poderá ser desfeita.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
          <button 
            onClick={onClose}
            style={{
              padding: '8px 16px',
              border: '1px solid #ccc',
              background: 'white',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Cancelar
          </button>
          <button 
            onClick={onConfirm}
            style={{
              padding: '8px 16px',
              border: 'none',
              background: '#d32f2f',
              borderRadius: '4px',
              cursor: 'pointer',
              color: 'white'
            }}
          >
            Excluir
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

function BotaoDeletar({ livroId, onDelete }) {
  /*const [mostrarModal, setMostrarModal] = useState(false);

  const handleClick = () => {
    setMostrarModal(true);
  };

  const confirmarExclusao = async () => {
    setMostrarModal(false);
    const sucesso = await deleteLivro(livroId);
    if (sucesso) {
      onDelete(livroId);
      toast.success("❌  Livro exclído com sucesso!");
    } else {
      alert("Erro ao excluir o livro.");*/
  const [showModal, setShowModal] = useState(false);

  // Quando o modal abre/fecha, controla a classe do elemento pai
  useEffect(() => {
    const elementoPai = document.querySelector(`[data-livro-id="${livroId}"]`);
    if (elementoPai) {
      if (showModal) {
        elementoPai.classList.add('modal-aberto');
      } else {
        elementoPai.classList.remove('modal-aberto');
      }
    }
  }, [showModal, livroId]);

  const handleClick = () => {
    setShowModal(true);
  };

  /*const cancelarExclusao = () => {
    setMostrarModal(false);*/
  const handleConfirm = () => {
    setShowModal(false);
    deleteLivro(livroId).then(sucesso => {
      if (sucesso) {
        onDelete(livroId);
      }
    });
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    /*<Button onClick={handleClick}>Excluir livro</Button>
      <ModalConfirmacao
        show={mostrarModal}
        onConfirm={confirmarExclusao}
        onCancel={cancelarExclusao}*/
    <>
      <Button onClick={handleClick}>
        <FaTrash size={14} />
      </Button>
      
      {/* Modal SEMPRE renderizado via portal */}
      <ModalPortal 
        isOpen={showModal}
        onClose={handleCancel}
        onConfirm={handleConfirm}
      />
    </>
  );
}

export default BotaoDeletar;
