import React from "react";


import { Col } from './styles';

interface Iprops{
    children?:JSX.Element| JSX.Element[];
}

const DivisionWrapper: React.FC<Iprops> = ({children}) => {
    return (
        <Col md={6}>
            {children}
        </Col>
    );
}

export default DivisionWrapper;