import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
            box-sizing: border-box;
    }

    body {
        width: 100vw;
        height: 100vh;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        background-color: #8C11BE;
        
        font-family: 'Raleway', sans-serif;
        color: #FFFFFF;
    }
`;

export default GlobalStyle;
