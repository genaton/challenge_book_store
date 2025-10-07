import { Modal, Button } from 'react-bootstrap';

function ModalConfirmacao({ show, onConfirm, onCancel }) {
  return (
    <Modal show={show} onHide={onCancel} centered>
      <Modal.Header closeButton>
        <Modal.Title className='text-danger fw-bold fs-5'>Confirmar exclusão</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Tem certeza que deseja excluir este livro?<br />
        <strong>Essa ação não poderá ser desfeita.</strong>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onCancel}>
          Cancelar
        </Button>
        <Button variant="danger" onClick={onConfirm}>
          Excluir
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalConfirmacao;