import {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`
    :root{
        box-sizing: border-box;
    }
    *{
        margin: 0;
        padding: 0;
        font-size: 1rem;
    }

    body{
        font-family: 'Roboto', sans-serif;
    }
`
