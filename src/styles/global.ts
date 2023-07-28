import { createGlobalStyle } from "styled-components";

export const GlobalStyle =  createGlobalStyle`
    :root{
        --background: #323238;
        --red:#E52E4D;
        --text-title:#969CB3;
        --shape:#FFFFFF;
        --header:#121214;
        --dashboard:#7882A2;
        --buttonBack:#015F43;


        /* --blue:#5429CC;
        --blue-light:#6933FF;
        --background:#0F02F5; */

    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        @media (max-width:1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body{
        background: var(--background);
        -webkit-font-smoothing:antialiased;
    }

    button{
        cursor: pointer;
    }

    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }
`;