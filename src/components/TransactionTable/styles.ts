import { styled } from "styled-components";

export const Container = styled.div`
    margin-top: 4rem;


    table{
        width: 100%;
        border-spacing:0 0.5rem ;

        th{
            color: var(--text);
            font-weight: 300;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
        }

        td{
            padding: 1rem 2rem ;
            border: 0;
            color: var(--text);
            background-color: var(--dashboard);
            border-radius: 0.25rem;

            .title{
                color: var(--title);
            }
            
            &.deposit{
                color: var(--success);
            }
            &.withdraw{
                color: var(--denied);
            }
        }
        
    }
`;