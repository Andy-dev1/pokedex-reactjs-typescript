import styled from "styled-components";
import { Row as RowBootstrap } from 'react-bootstrap';
import pokeballPng from '../../assets/pokeball.png';

export const Row = styled(RowBootstrap)`
    width: 100%;
    height: 50px;
    background: #FF7549;
    border-radius: 40px;
    overflow: hidden;

    h5 {
    position: relative;
    margin: 0 auto;
    top: 12px;
    color: white;
    }
`;
export const BoxName = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    background: linear-gradient(295.82deg, #000000 72.02%, rgba(0, 0, 0, 0) 72.03%);
`;

export const MiniImage=styled.img`
    position: relative;
    top: 5px;
    left: 10px;
    width: 35px;
    height: 35px;
`;

export const PokeballIcon=styled.div`
    position: relative;
    top: 10px;
    right: 10px;
    width: 30px;
    height: 30px;
    background: #D9D9D9;
    background-image: url(${pokeballPng});
    background-size: cover;
    border-radius: 20px;
    animation: mymove 5s infinite;
    @keyframes mymove {
    100% {
        transform: rotate(360deg);
    }
}
`;