import TableRow from "./TableRow";
import React, {useState} from 'react'

function TableBody(){
    
    const [count, setCount] = useState(0);
    
    return (
        <>
        <table>
            <thead>
                <tr>
                    <th>Test</th>
                    <th>Person 1</th>
                    <th>Person 2</th>
                    <th>Result</th>
                </tr>
            </thead>
            <tbody>
                {Array(count).fill(0).map((e, i) => (
                    <TableRow />
                ))}
                {count}
            </tbody>
        </table>
        <button  onClick={() => setCount(count + 1)} className="addRow">Add New Row</button>
        </>
    )
};

export default TableBody;
