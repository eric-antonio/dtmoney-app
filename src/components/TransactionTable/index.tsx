import { Container } from "./styles";

export function TransactionTable(){
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
                        <td>Desenvolvimento de website</td>
                        <td>12.0000MT</td>
                        <td>Desenvolvimento</td>
                        <td>20/04/23</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td>12.0000MT</td>
                        <td>Desenvolvimento</td>
                        <td>20/04/23</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento de WebApp</td>
                        <td>22.0000MT</td>
                        <td>Desenvolvimento</td>
                        <td>20/04/23</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento de App Mobile</td>
                        <td>34.0000MT</td>
                        <td>Desenvolvimento</td>
                        <td>20/04/23</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}