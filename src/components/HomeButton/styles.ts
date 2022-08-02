import styled from "styled-components";
import { Button as ButtonBoostrap } from "react-bootstrap";

export const Button = styled(ButtonBoostrap)`
    position: relative;
    height: 38px;
    border: none;
    cursor: pointer;
    background-color: black;
    color: white;
    transition: 0.5s;

    &:hover{
        background-color: #FF7549;
    }
`;

