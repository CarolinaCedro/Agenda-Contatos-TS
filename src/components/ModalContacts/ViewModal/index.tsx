import Modal from 'react-modal'
import { Container } from "./styles";
import {AiOutlineClose} from 'react-icons/ai'

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

    <button type='button' className='react-modal-button-close' onClick={onRequesClose}>
          <AiOutlineClose fontSize={20} color={'#969cb3'}/>
    </button>
      <Container>
        <h1>visualização</h1>
      </Container>
    </Modal>
    
  )
}