import { Container, Content } from "./styles";
import {AiFillPlusCircle} from 'react-icons/ai'

export function ButtonNewContact (){
  return (
    <Container>
      <Content>
      <button>
          <AiFillPlusCircle fontSize={20} color={'#4831D4'}/>
          <p>Adicionar Contato</p>
      </button>
      </Content>
    </Container>
    
  )
}