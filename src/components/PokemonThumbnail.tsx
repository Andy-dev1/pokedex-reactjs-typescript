import React from 'react'
import {Link} from "react-router-dom";
import {Col} from 'react-bootstrap';

interface IPokemon{
    id:number;
    name:string;
    sprites:string;
    types:string;
    
}


const PokemonThumbnail:React.FC<IPokemon>=(props)=> {
    const style = `thumb-container moredetail-button ${props.types} `
    return (
        <Col  className={style} sm={1} >
        <Link to={`/${props.name}`} className="moredetail-button">
            <div className="number">
                <small>
                    #0{props.id}
                </small>
            </div>
            <img src={props.sprites} alt={props.name}></img>
            <div className="detail-wrapper">
                <h3>{props.name}</h3>
                <small>Type: {props.types}</small>
            </div>
        </Link>
        </Col>
    )
}
export default PokemonThumbnail