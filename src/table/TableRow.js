function TableRow(props){
    const names = ['Select', 'Mark', 'Nick', 'Mike', 'Geo']
    return(
        <tr>
            {/* first row */}
            <td>{props.rowNumber}
            </td>
            {/* first bettor */}
            <td>
                <select name="" id="">
                    {names.map((e, i) => (
                         <option value="">{e}</option>
                        )    
                    )}
                </select>
            </td>
            {/* second bettor */}
            <td>
                <select name="" id="">
                    {names.map((e, i) => (
                         <option value="">{e}</option>
                        )    
                    )}
                </select>
            </td>
            {/* bet */}
            <td>test</td>
        </tr>
    );
};

export default TableRow;
