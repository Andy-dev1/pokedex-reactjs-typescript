import { useNavigate } from "react-router-dom";


const HomeButton = () => {
    const navigate = useNavigate();
    
    return (
        <button className='back-button' onClick={() => navigate('/')} >
            Home
        </button>
    )
}

export default HomeButton;