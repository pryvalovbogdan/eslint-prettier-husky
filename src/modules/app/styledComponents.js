import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const globalFontSize = 16;

export const GlobalStyles = createGlobalStyle`
  body {
  width: 100%;
  height: 100vh;
    margin: 0;
    font-family: Roboto, sans-serif; // FixMe if font-family will be changed
    font-size: ${globalFontSize}px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.25;
    letter-spacing: normal;
    user-select: none;
    direction: ${props => props.direction};
    overflow: hidden;
  }
  

  input {
    border: none;
    outline: none;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  //background: #faf8ef;
  text-align: center;
  font-size: 25px;
`;

export const Title = styled.h1`
  color: navy;
  text-align: center;
  font-size: 25px;
`;

export const ResetButton = styled.button``;
