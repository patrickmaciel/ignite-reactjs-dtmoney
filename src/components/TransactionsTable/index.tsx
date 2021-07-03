import { Container } from './styles'
import {useEffect} from "react";

export function TransactionsTable() {
  useEffect(() => {
    fetch('http://localhost:3000/api/transactions')
      .then(response => response.json())
      .then(data => console.log(data))
  })

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
              <td>Desenvolvimento de Website</td>
              <td className='deposit'>R$12.000,00</td>
              <td>Desenvolvimento</td>
              <td>20/02/2021</td>
          </tr>
          <tr>
              <td>Energia</td>
              <td className='withdraw'>-R$350,00</td>
              <td>Casa</td>
              <td>20/02/2021</td>
          </tr>
          <tr>
              <td>Internet</td>
              <td className='withdraw'>-R$263,00</td>
              <td>Casa</td>
              <td>20/02/2021</td>
          </tr>
          <tr>
              <td>Desenvolvimento de Website</td>
              <td className='deposit'>R$12.000,00</td>
              <td>Desenvolvimento</td>
              <td>20/02/2021</td>
          </tr>
          <tr>
              <td>Desenvolvimento de Website</td>
              <td>R$12.000,00</td>
              <td>Desenvolvimento</td>
              <td>20/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}