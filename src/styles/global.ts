import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root {
        --background-color: #f0f2f5;
        --shape-color: #ffffff;

        --violet-color: #5429CC;
        --violet-color-light: #6944ff;
        --red-color: #e52e4d;
        --green-color: #33cc95;

        --text-title: #363f5f;
        --text-body: #969cb3;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 1rem;
        }

        @media (max-width: 720px){
            font-size: 0.8rem;
        }
    }

    body {
        background-color: --background-color;
        //deixa as fontes com menos serrilhado
        -webkit-font-smoothing: antialiased;
    }

    body, input, textearea, button {
        font-family: 'Nunito', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 700;
    } 

    button {
        cursor: pointer;
    }

    // todos os elementos disabled vao receber essas propriedades
    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

`;
