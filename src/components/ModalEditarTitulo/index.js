import { Modal, Button, Form } from 'react-bootstrap';
import { useState } from 'react';

function ModalEditarTitulo({ show, onClose, onConfirm }) {
  const [novoTitulo, setNovoTitulo] = useState("");

  const handleConfirmar = () => {
    if (!novoTitulo.trim()) return;
    onConfirm(novoTitulo);
    setNovoTitulo("");
  };

  const handleFechar = () => {
    setNovoTitulo("");
    onClose();
  };

  return (
    <Modal show={show} onHide={handleFechar} centered>
      <Modal.Header closeButton>
        <Modal.Title className=' fw-bold fs-5'>Alterar título do livro</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Control
          type="text"
          placeholder="Novo título"
          value={novoTitulo}
          onChange={(e) => setNovoTitulo(e.target.value)}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleFechar}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleConfirmar}>
          Salvar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalEditarTitulo;