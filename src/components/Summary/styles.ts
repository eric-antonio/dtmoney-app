import {styled} from 'styled-components';

export const  Container =  styled.div`

    display: grid;
    grid-template-columns: repeat(3 , 1fr);
    gap:2rem;
    margin-top: -10rem;

    div{
        background: var(--dashboard);
        padding: 1.5rem;
        border-radius:4px;
        color:var(--text);

        header{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
`;