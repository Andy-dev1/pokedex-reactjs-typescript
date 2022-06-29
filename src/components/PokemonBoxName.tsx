import { Row } from 'react-bootstrap';
import classes from './PokemonBoxName.module.css';

interface IPokemonBoxName{
    name:string|undefined;
    miniSprite:string;
}


const PokemonBoxName=({name,miniSprite}:IPokemonBoxName)=>{
    return(
                <Row className={classes['pokemon-box-name']}>
                    <div className={classes['pokemon-box-name-layer']}>
                        <img alt={`${name}`}className={classes['pokemon-mini-image']} src={`${miniSprite}`}></img>
                        <h5>{name}</h5>
                        <div className={classes['pokeball-icon']}></div>
                    </div>
                </Row>
    );
}
export default PokemonBoxName;