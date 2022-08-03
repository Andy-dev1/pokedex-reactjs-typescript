import styled from "styled-components";
import {Row} from 'react-bootstrap';

export const PokemonBoxDetail = styled.div`
   margin-top: 50px;
`;
export const PokemonText = styled.div`
   margin-top: 10px;
    width: 100%;
    height: 90px;
    background-color: whitesmoke;

    p{
        margin: 0;
        margin-left: 10px;
    }
`;
export const MainBox = styled(Row)`
    background-color: #FF8C67; 
    @media screen and (max-width: 780px) {
         height: 100vh;
    }
`;

export const DescriptionBox = styled.div`
    height: 40px;
    background: whitesmoke;
    margin-bottom: 10px;
    text-align: center;

    >h6 {
    position: relative;
    margin: 0 auto;
    top: 11px;
    color: black;
    font-size: 14px;
    }
`;
export const PokeImage = styled.img`
    max-width: 200px;
`;