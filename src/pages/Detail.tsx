import { useParams } from 'react-router-dom';
import './Detail.css';

const Detail=()=>{
    let { name } = useParams();

    return(
    <div className="box-wrapper">
        <div className='division'>
            <div className='poke-image'>

            </div>
        </div>
        <div className='division'>
            <div className='pokemon-box-name'>
                <div className='pokemon-box-name-layer'>
                    <div className='pokemon-mini-image'></div>
                    <h6>{name}</h6>
                    <div className='pokeball-icon'></div>
                </div>
            </div>
        </div>
    </div>);
}
export default Detail;