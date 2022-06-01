import Modal from 'react-modal'
import { Container } from "./styles";


interface ViewModal{
  isOpenViewModal:boolean,
  onRequesClose:()=> void;
}
export function ViewModal({isOpenViewModal,onRequesClose}:ViewModal){
  return(

    <Modal
    isOpen={isOpenViewModal}
    onRequestClose={onRequesClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
    >
      <Container>
        <h1>visualização</h1>
      </Container>
    </Modal>
    
  )
}