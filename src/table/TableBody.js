import TableRow from "./TableRow";
import React, {useState, useEffect} from 'react'


function TableBody(){
    
    const [rows, setRows] = useState(1);
    useEffect( () => {
        console.log(rows) //logs every time a row changes
    }, [rows] ) //[rows] looking for change from rows
    
    useEffect( () => {
        //
    }, [])//runs on mount
    
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
                {Array(rows).fill(0).map((e, i) => (
                    <TableRow heading={i}/>
                ))}
                {/* {rows} */}
            </tbody>
        </table>
        <button  onClick={() => setRows(rows + 1)} className="addRow">Add New Row</button>
        </>
    )
};

export default TableBody;
