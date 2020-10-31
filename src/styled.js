import styled from 'styled-components';
import { Application } from 'react-rainbow-components';
import Logo from './logo';

export const ApplicationContainer = styled(Application)`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    overflow: auto;
    padding: 8px 0 8px 8px;
    background-color: #fff;
`;

export const StyledLogo = styled(Logo)`
    margin-right: 12px;
    margin-left: 48px;
    margin-top: 24px;
`;

export const StyledContent = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 1240px;
    margin: 12px auto;
    box-sizing: border-box;
    overflow: auto;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    font-size: 26px;
    color: ${(props) => props.theme.rainbow.palette.text.main};
    margin-top: 32px;
`;

export const StepText = styled.h2`
    font-size: 18px;
    margin-top: 32px;
    color: ${(props) => props.theme.rainbow.palette.text.label};
`;