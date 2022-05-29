import styled from "styled-components";

export const Container =  styled.header`
  background-color: var(--colorPrimary);

`

export const Content = styled.div`
  max-width: 100%;
  height: 3.5rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  h2{
    margin-left:0.4rem;
    color: var(--colorSecundary);
    font-weight:800;
    font-size: 1.3rem;
  }
`