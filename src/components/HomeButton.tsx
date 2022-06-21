import { useNavigate } from "react-router-dom";
import classes from './HomeButton.module.css'

const HomeButton = () => {
    const navigate = useNavigate();
    
    return (
        <button className={classes['back-button']} onClick={() => navigate('/')} >
            Home
        </button>
    )
}

export default HomeButton;