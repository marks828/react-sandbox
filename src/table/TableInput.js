import { dummyData } from "../dummyData/dummyData";

function TableInput(props){
    const names = ['Select', 'Mark', 'Nick', 'Mike', 'Geo']
    return(
        <tr>
            {/* first row */}
            <td>
                <input type="text" id="bet_description" placeholder="bet description" />
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
            <input type="text" id="bet_value" placeholder="bet value" />
        </tr>
    );
};

export default TableInput;
