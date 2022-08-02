import React from "react";
import { useNavigate } from "react-router-dom";


import { Button } from './styles';




const HomeButton: React.FC = () => {
    const navigate = useNavigate();
    return (
        <Button className='mt-4 px-5' onClick={() => navigate('/')} >
            Home
        </Button>


    );
}

export default HomeButton;