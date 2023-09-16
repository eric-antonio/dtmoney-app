import { styled } from "styled-components";
import { darken, transparentize} from "polished";
export const Container = styled.div`
  h2 {
    color: var(--title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  input {
    color: var(--text);
    width: 100%;
    padding: 0 1.5rem;

    height: 3.7rem;

    border-radius: 0.25rem;
    border: 1px solid #121210;

    font-size: 1rem;
    font-weight: 400;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;

    background: #121214;
    &::placeholder {
      color: var(--title);
    }
    & + input {
      margin-top: 1rem;
    }
  }

    button[type='submit']{
        color: var(--text);
        font-weight: 600;
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background: var(--success);
        border-radius: 0.25em;
        border: 1px solid #121214;

        font-size: 1rem;
        margin-top: 1.5rem;

        transition: 0.2s;

        &:hover{
          filter: brightness(0.9);
        }
    }
`;

export const TransactionTypeContainer =styled.div`
  margin: 1rem 0 ;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;

`;


interface RadioBoxProps{
  isActive: boolean;
  activeColor: 'green' | 'red'}

const  colors = {
  green:'#33CC95',
  red: '#E52E4D'
}

export const RadioBox =  styled.button<RadioBoxProps>`
  height: 4rem;
  border: 1px solid;
  border-radius:0.25rem ;

  background:  ${(props) => props.isActive 
    ? transparentize(0.9, colors[props.activeColor] )
    : 'transparent'
  };

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover{
    border-color: ${darken(0.1, '#d7d7d7')};
  }

  img{
    width: 20px;
    height: 20px;
  }
  span{
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text);
  }
`;