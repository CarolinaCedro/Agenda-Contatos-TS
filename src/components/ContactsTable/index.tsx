import { Container,Content, Table } from "./styles";
import {IoEyeSharp} from 'react-icons/io5'
import {FaPencilAlt} from 'react-icons/fa'
import {FaTrashAlt} from 'react-icons/fa'

interface contactsTableProps{
  onViewContact:()=>void;
  onOpenEdictContact:()=>void;
  onOpenDeleteContact:()=>void;
}

export function ContactsTable({onOpenEdictContact,onOpenDeleteContact,onViewContact}:contactsTableProps){
  return (
    <Container>
      <Content>
        <input type="text"/>
      </Content>

      <Table>
      <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Celular</th>
              <th>Cidade</th>
              <th>Estado</th>
              <th>Ação</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Ana Carolina Cedro</td>
              <td>064 99346-9090</td>
              <td>Santa Helena de Goiás</td>
              <td>GO</td>
              <td className="actionStyleButton">
                <button onClick={onViewContact}> 
                  <IoEyeSharp  fontSize={20} color={'#4831D4'}/></button>
                <button onClick={onOpenEdictContact}>
                  <FaPencilAlt fontSize={15} color={'#4831D4'}/></button>
                <button onClick={onOpenDeleteContact}>
                  <FaTrashAlt fontSize={15} color={'#4831D4'}/></button>
              </td>
            </tr>

            <tr >
              <td>Ana Carolina Cedro</td>
              <td>064 99346-9090</td>
              <td>Santa Helena de Goiás</td>
              <td>GO</td>
              <td className="actionStyleButton">
                <button> <IoEyeSharp  fontSize={20} color={'#4831D4'}/></button>
                  <button><FaPencilAlt fontSize={15} color={'#4831D4'}/></button>
                  <button><FaTrashAlt fontSize={15} color={'#4831D4'}/></button>
                </td>
            </tr>

            <tr>
              <td>Ana Carolina Cedro</td>
              <td>064 99346-9090</td>
              <td>Santa Helena de Goiás</td>
              <td>GO</td>
              <td className="actionStyleButton">
                <button> <IoEyeSharp  fontSize={20} color={'#4831D4'}/></button>
                  <button><FaPencilAlt fontSize={15} color={'#4831D4'}/></button>
                  <button><FaTrashAlt fontSize={15} color={'#4831D4'}/></button>
                </td>
            </tr>
          </tbody>
        </table>
      </Table>
    </Container>
  )
}