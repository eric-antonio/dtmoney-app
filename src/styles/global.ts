import { createGlobalStyle } from "styled-components";

export const GlobalStyle =  createGlobalStyle`
    :root{
        --background: #323238;
        --red:#E52E4D;
        --text-title:#969CB3;
        --success: #00B37E;
        --denied:#F75A68;
        --shape:#FFFFFF;
        --header:#121214;
        --dashboard:#7882A2;
        --buttonBack:#015F43;


        /* --blue:#5429CC;
        --blue-light:#6933FF;
        --background:#0F02F5; */

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
    body , input , textarea, button{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;

    }
    h1 , h2 , h3 , h4 , h5 ,h6 , strong{

        font-weight: 600;
    }

    button{
        cursor: pointer;
    }

    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }
`;