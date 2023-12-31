import { createGlobalStyle } from "styled-components";

export const GlobalStyle =  createGlobalStyle`
    :root{
        --background:#29292E;
        --red:#E52E4D;
        --text:#E1E1E6;
        --title:#C4C4CC;
        --success: #00B37E;
        --denied:#F75A68;
        --shape:#FFFFFF;
        --header:#121214;
        --dashboard:#323238;
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


    .react-modal-overlay{
        background: rgba(0,0,0,0.9) ;
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content{
        width: 100%;
        max-width: 576px;
        background: var(--background);
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem ;
    }

    .closeModal{
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;
        transition: 0ms.3s;
        &:hover{
            filter: brightness(0.6);
        }
    }
`;