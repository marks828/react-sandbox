import TableRow from "./TableRow";
import React, {useState, useEffect} from 'react'
import TableRowStatic from "./tableRowStatic";
import TableInput from "./TableInput";


function TableBody(){
    // rows is variable, setRows is function, useState is the count for how many table rows we want
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
                <TableRowStatic />
                {/* takes in rows from hook, fills in array for .map to map over */}
                {Array(rows).fill(0).map((e, i) => (
                    <TableInput rowNumber={i+1}/>
                ))}
                {/* {rows} */}
            </tbody>
        </table>
        {/* on button click setRows adds another rows to the array from above */}
        <button  onClick={() => setRows(rows + 1)} className="addRow">Add New Row</button>
        </>
    )
};

export default TableBody;
