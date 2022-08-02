import styled from "styled-components";

import {Row as RowBoostrap} from 'react-bootstrap';

export const Row = styled(RowBoostrap)`
    background-color: #FF8C67; 
    @media screen and (max-width: 780px) {
         height: 100vh;
    }
`;