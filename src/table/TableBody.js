import TableRow from "./TableRow";

function TableBody(){
    
    return (
        <table>
            <thead>
                <tr>
                    <th>Bet</th>
                    <th>Person 1</th>
                    <th>Person 2</th>
                    <th>Result</th>
                </tr>
            </thead>
            <tbody>
                <TableRow />
            </tbody>
        </table>
    )
};

export default TableBody;