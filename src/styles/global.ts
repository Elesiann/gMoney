import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root {
        --background-color: #193F2F;
        --shape-color: #f5f5f7;

        --violet-color: #5429CC;
        --violet-color-light: #6944ff;
        --red-color: #e52e4d;
        --green-color: #D8F3DC;

        --text-title: #363f5f;
        --text-body: #969cb3;

        --mint-cream: #f2f8f3ff;
        --nyanza: #d8f3dcff;
        --turquoise-green: #b7e4c7ff;
        --turquoise-green-2: #95d5b2ff;
        --ocean-green: #74c69dff;
        --ocean-green-2: #52b788ff;
        --illuminating-emerald: #40916cff;
        --bottle-green: #245741;
        --brunswick-green: #1b4332ff;
        --phthalo-green: #112C20;
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
        background-color: #e0e2df;
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

    .logo {
        width: 150px;
    }


    // todos os elementos disabled vao receber essas propriedades
    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

`;
