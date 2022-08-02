import React from "react";



import { Row } from './styles';

interface Iprops {
    children?: JSX.Element | JSX.Element[];
}


const MainBox: React.FC<Iprops> = ({ children }) => {

    return (
        <Row className='p-5'>
            {children}
        </Row>
    );
}

export default MainBox;