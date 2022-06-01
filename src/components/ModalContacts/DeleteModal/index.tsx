import Modal from 'react-modal'
import { Container } from "./styles";


interface deleteModalProps{
  isOpen: boolean,
  onRequestClose:()=> void;
}

export function DeleteModal({isOpen,onRequestClose}:deleteModalProps){
  return(
    <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
    >
    <Container>
      <h1>its working</h1>
    </Container>
    </Modal>
    
  )
}