import { useEffect } from "react";
import { Container } from "./styles";

export function TransactionTable(){
    useEffect(()=>{
        fetch('http://localhost:3000/api/transactions')
        .then(response=> response.json())
        .then(data => console.log(data))
    },[])
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <td className="title">Desenvolvimento de WebApp</td>
                        <td className="deposit">22.0000MT</td>
                        <td>Desenvolvimento</td>
                        <td>20/04/23</td>
                    </tr>
                    <tr>
                        <td className="title">Desenvolvimento de App Mobile</td>
                        <td className="withdraw">-34.0000MT</td>
                        <td>Desenvolvimento</td>
                        <td>20/04/23</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}