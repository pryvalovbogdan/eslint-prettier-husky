import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { typeGlobalProps, typeWrapperProps } from './types';

const globalFontSize = 16;

export const GlobalStyles = createGlobalStyle<typeGlobalProps>`
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
  
  button {
    font-family: Roboto, sans-serif;
    font-size: ${globalFontSize}px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.25;
    letter-spacing: normal;
    border: none;
    outline: none;
    margin-top: 5px;
  }

  input {
    border: none;
    outline: none;
  }
`;

export const Wrapper = styled.div<typeWrapperProps>`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background: ${props => props.bg};
  text-align: center;
  font-size: 25px;
`;

export const Title = styled.h1`
  color: navy;
  text-align: center;
  font-size: 25px;
`;

export const ResetButton = styled.button``;

export const NewsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: scroll;
  width: 700px;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export const NewsImage = styled.img`
  width: 400px;
`;

export const NewsBlock = styled.div``;

export const NewsLink = styled.a``;
