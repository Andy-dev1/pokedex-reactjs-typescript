import React from 'react'

import {MoreDetailButton, Number, ThumbContainer} from './styles';


interface IPokemon{
    id:number;
    name:string;
    sprites:string;
    types:string;
    
}


const PokemonThumbnail:React.FC<IPokemon>=(props)=> {
    /* const style = `thumb-container moredetail-button ${props.types} ` */
    return (
        <ThumbContainer className={props.types} sm={1}>
        
        <MoreDetailButton to={`/${props.name}`} className="moredetail-button">
            <Number>
                <small>
                    #0{props.id}
                </small>
            </Number>
            
            <img src={props.sprites} alt={props.name}></img>
            <div className="detail-wrapper">
                <h3>{props.name}</h3>
                <small>Type: {props.types}</small>
            </div>
        </MoreDetailButton>
        
        </ThumbContainer>
    )
}
export default PokemonThumbnail