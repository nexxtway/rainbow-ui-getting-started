import styled from 'styled-components';
import { Application } from 'react-rainbow-components';

export const ApplicationContainer = styled(Application)`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    overflow: auto;
    padding: 8px 0 8px 8px;
    background-color: #f4f6f9;
`;

export const StyledContent = styled.main`
    max-width: 1240px;
    margin: 12px auto;
    box-sizing: border-box;
    overflow: auto;
    display: flex;
    flex-direction: column;
`;
