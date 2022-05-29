import { Container,Content, Table } from "./styles";


export function ContactsTable(){
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
              <td>AGUARDE..</td>
            </tr>

            <tr>
              <td>Ana Carolina Cedro</td>
              <td>064 99346-9090</td>
              <td>Santa Helena de Goiás</td>
              <td>GO</td>
              <td>AGUARDE..</td>
            </tr>

            <tr>
              <td>Ana Carolina Cedro</td>
              <td>064 99346-9090</td>
              <td>Santa Helena de Goiás</td>
              <td>GO</td>
              <td>AGUARDE..</td>
            </tr>
          </tbody>
        </table>
      </Table>
    </Container>
  )
}