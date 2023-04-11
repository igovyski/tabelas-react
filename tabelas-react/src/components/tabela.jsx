import './tabela.css'

export default function Tabela(){
    return(
        <table>
            <tr>
                <th>Horários</th>
                <th>Segunda</th>
                <th>Terça</th>
                <th>Quarta</th>
                <th>Quinta</th>
            </tr>
            <tr>
                <td>19h00-19h45</td>
                <td>Modelagem de Banco de Dados</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
            </tr>
            <tr>
                <td>19h45-20h30</td>
                <td>Modelagem de Banco de Dados</td>
                <td>Desenvolvimento Front-End</td>
                <td>Desenvolvimento Front-End</td>
                <td>Redes de Computadores</td>
            </tr>
            <tr>
                <td>20h45-21h30</td>
                <td>Estrutura de Dados</td>
                <td>Desenvolvimento Front-End</td>
                <td>Modelagem de Banco de Dados</td>
                <td>Redes de Computadores</td>
            </tr>
            <tr>
                <td>21h30-22h15</td>
                <td>Estrutura de Dados</td>
                <td>Engenharia de Software</td>
                <td>Engenharia de Software</td>
                <td>Redes de Computadores</td>
            </tr>
            <tr>
                <td>22h15-23h00</td>
                <td>Estrutura de Dados</td>
                <td>Engenharia de Software</td>
                <td>Engenharia de Software</td>
                <td>Redes de Computadores</td>
            </tr>
        </table>
    )
}