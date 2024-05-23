// stylesGlobal.ts
import { createGlobalStyle } from "styled-components";
import StyleColors from "./containers/Colors/stylesColors"; // Importe o arquivo de cores

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: Roboto, Helvetica, sans-serif;
}

body {
    background-color: ${(props) => StyleColors.corBody}; // Use as cores diretamente do arquivo de cores
}
`

export default GlobalStyle;
