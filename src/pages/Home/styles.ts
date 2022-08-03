import styled from "styled-components";

import {Container as ContainerBoostrap} from 'react-bootstrap';

export const Container = styled(ContainerBoostrap)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 3rem 0.5rem;
`;