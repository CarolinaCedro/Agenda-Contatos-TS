
import Modal from 'react-modal'
import { Container } from './styles';
import {AiOutlineClose} from 'react-icons/ai'


interface NewTransictionModalProps{
  isOpen:boolean;
  onRequesClose:()=>void;
}


export function ModalContacts({isOpen,onRequesClose}:NewTransictionModalProps){
  return (

   
      <Modal
       isOpen={isOpen}
       onRequestClose={onRequesClose}
       overlayClassName="react-modal-overlay"
       className="react-modal-content"
       >
        <button type='button' className='react-modal-button-close' onClick={onRequesClose}>
          <AiOutlineClose fontSize={20} color={'#969cb3'}/>
         </button>
        <Container >
            <h2>Cadastrar transação</h2>
            <input  placeholder='Exemplo'/>
            <input  placeholder='Exemplo'/>
            <input  placeholder='Exemplo'/>
            <input  placeholder='Exemplo'/>    
            
            <button type="submit">Cadastrar</button>        
        </Container>
    </Modal>

  )
}