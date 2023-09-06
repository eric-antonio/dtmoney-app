import { styled } from "styled-components";

export const Container = styled.div`
  h2 {
    color: var(--title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  input {
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
