import {createGlobalStyle} from "styled-components";
import colors from "./colors";
import Montserrat from "../public/fonts/Montserrat-Regular.ttf"

export const Global =  createGlobalStyle`
  
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    src: url(${Montserrat});
  }
  
  html {
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
  
  body {
    color: ${colors.text.primary};
    background-color: ${colors.bg.secondary};
    font-size: 14px;
    line-height: 20px;
    min-width: 100vw;
    min-height: 100vh;
    overflow: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-overflow-scrolling: touch;
    font-family: 'Montserrat', Arial, sans-serif;
  }
  
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  li {
    list-style: none;  
  }
`