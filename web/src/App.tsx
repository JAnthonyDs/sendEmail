import Table from 'react-bootstrap/Table';
import axios, { AxiosResponse } from 'axios';
import {useState, useEffect} from 'react'
import GlobalStyles from './styles/GlobalStyles';
import { Main } from './styles/Main';

export interface UserProps {
  id : String,
  name: String,
  email: String,
  createdAt: String
}

function App() {

  const [users, setUsers] = useState<any>([])

  useEffect(() => {
    async function loadUsers(){
      setUsers([])
      const response = await axios.get('http://localhost:3333/showAll')
      const resp = response.data
      setUsers(resp)
      console.log(resp)
    }

    loadUsers()
  },[])

  return (
    <Main>
      <Table striped bordered hover>
        <thead>
          <th>
            #
          </th>
          <th>
            Name
          </th>
          <th>
            Email
          </th>
          <th>
            Create At
          </th>
          <th>
            Action
          </th>
        </thead>
        <tbody>
          {users.length ? users.map((user: UserProps,index: String) => (
            <tr>
              <td>{index}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.createdAt}</td>
              <td>
                <button>enviar</button>
              </td>
            </tr>
          )): <></>}
        </tbody>
      </Table>
      <GlobalStyles/>
    </Main>
  )
}

export default App
