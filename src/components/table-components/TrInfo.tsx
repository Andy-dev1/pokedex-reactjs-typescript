interface ITrInfo{
    type:string;
    data:string;
}

const TrInfo = ({type,data}:ITrInfo) => {
    return (
        <tr>
            <td>{type}</td>
            <td>{data}</td>
        </tr>
    )
}
export default TrInfo;