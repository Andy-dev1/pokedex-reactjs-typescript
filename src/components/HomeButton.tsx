import { useNavigate } from "react-router-dom";
import classes from './HomeButton.module.css'
import { Button } from "react-bootstrap";

const HomeButton = () => {
    const navigate = useNavigate();
    
    return (
        <Button className={classes['back-button']} onClick={() => navigate('/')} >
            Home
        </Button>
    )
}

export default HomeButton;