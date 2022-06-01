import Modal from 'react-modal'
import { Container } from "./styles";


interface EditModalProps{
  isOpenEditModal:boolean,
  onRequesClose:()=> void;
}
export function EditModal({isOpenEditModal,onRequesClose}:EditModalProps){
  return(

    <Modal
    isOpen={isOpenEditModal}
    onRequestClose={onRequesClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
    >
      <Container>
        <h1>teste</h1>
      </Container>
    </Modal>
    
  )
}