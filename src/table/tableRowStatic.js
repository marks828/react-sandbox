import { dummyData } from "../dummyData/dummyData";

function TableRowStatic(props){
    const names = ['Select', 'Mark', 'Nick', 'Mike', 'Geo']
    return(
        <tr>
            <td>{props.heading}</td>
            <td>
                <p>{names[1]}</p>
            </td>
            <td>
                <p>{names[2]}</p>
            </td>
            <td>test</td>
        </tr>
    );
};

export default TableRowStatic;
