

function TableRow(props){
    const names = ['Select', 'Mark', 'Nick', 'Mike', 'Geo']
    return(
        <tr>
            <td>{props.heading}</td>
            <td>
                <select name="" id="">
                    {names.map((e, i) => (
                         <option value="">{e}</option>
                        )    
                    )}
                </select>
            </td>
            <td>
                <select name="" id="">
                    {names.map((e, i) => (
                         <option value="">{e}</option>
                        )    
                    )}
                </select>
            </td>
            <td>test</td>
        </tr>
    );
};

export default TableRow;
