import React from "react";


import { Row,BoxName,MiniImage,PokeballIcon } from './styles';

interface IPokemonBoxName{
    name:string|undefined;
    miniSprite:string;
}

const PokemonBoxName: React.FC<IPokemonBoxName> = ({name,miniSprite}) => {
    return (

        <Row>
            <BoxName>
                <MiniImage alt={`${name}`} src={`${miniSprite}`}></MiniImage>
                <h5>{name}</h5>
                <PokeballIcon></PokeballIcon>
            </BoxName>
        </Row>


    );
}

export default PokemonBoxName;