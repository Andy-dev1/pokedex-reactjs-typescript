import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from 'react-bootstrap';

interface Iprops{
    children?:JSX.Element| JSX.Element[];
}

const TableWrapper = ({children}:Iprops) => {
    return (
        <Table striped bordered hover variant="dark">
            <tbody>
                {children}
            </tbody>
        </Table>
    )
}
export default TableWrapper;