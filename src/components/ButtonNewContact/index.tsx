import { Container, Content } from "./styles";
import {AiFillPlusCircle} from 'react-icons/ai'


interface ButtonNewContactProps{
  onOpenNewContact:()=>void;
}

export function ButtonNewContact ( {onOpenNewContact}:ButtonNewContactProps){

  return (
    <Container>
      <Content>
      <button onClick={onOpenNewContact}>
          <AiFillPlusCircle fontSize={20} color={'#4831D4'}/>
          <p>Adicionar Contato</p>
      </button>
      </Content>
    </Container>
    
  )
}