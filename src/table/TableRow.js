function TableRow(){
    const names = ['Select', 'Mark', 'Nick']
    return(
        <tr>
            <td>test</td>
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