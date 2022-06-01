import Modal from 'react-modal'
import { Container } from "./styles";
import {AiOutlineClose} from 'react-icons/ai'


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
       <button type='button' className='react-modal-button-close' onClick={onRequesClose}>
          <AiOutlineClose fontSize={20} color={'#969cb3'}/>
    </button>
      <Container>
        <h1>teste</h1>
      </Container>
    </Modal>
    
  )
}