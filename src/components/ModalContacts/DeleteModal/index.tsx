import Modal from 'react-modal'
import { Container } from "./styles";
import {AiOutlineClose} from 'react-icons/ai'


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
    <button type='button' className='react-modal-button-close' onClick={onRequestClose}>
          <AiOutlineClose fontSize={20} color={'#969cb3'}/>
    </button>
    <Container>
      <h1>its working</h1>
    </Container>
    </Modal>
    
  )
}