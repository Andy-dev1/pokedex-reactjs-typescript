import styled from "styled-components";
import {Link} from "react-router-dom";
import { Col } from "react-bootstrap";

export const ThumbContainer = styled(Col)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.5rem 0;
    margin: 0.3rem;
    border: 1px solid #efefef;
    border-radius: 0.2rem;
    min-width: 160px;
    text-align: center;
    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.089);
    transition: 1s;
    color: black;
    text-decoration: none;
    border-radius: 20px;
    img {
        width: 120px;
        height: 120px;
    }
    small {
         text-transform: capitalize;
    }
    
    &:hover{
        color: rgb(0, 0, 0);
        transform: scale(1.1);
        img{
            transition: 1s;
            transform: scale(1.1);
        }
        
    }
`;
export const Number = styled.div`
    border-radius: 1rem;
    width: 50px;
    margin: 0 auto;
    background-color: rgba(255, 255, 255, 0.3);
`;
export const MoreDetailButton=styled(Link)`
    transition: 1s;
    color: black;
    text-decoration: none;
    border-radius: 20px;
`;