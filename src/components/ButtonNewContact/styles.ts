import styled from "styled-components";

export const Container = styled.div`
background-color: var(--backgroundColor);
width: 100%;
padding: 1.3rem 4rem;

`

export const Content = styled.div`
display: flex;
align-items: center;
justify-content: end;

button{
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--colorPrimary);
  padding: 10px 30px;
  border-radius: 0.25rem;
  background-color: var(--colorSecundary);
  transition: filter 0.3s;

  p{
    padding-left:0.2rem;
    color: var(--colorPrimary);
    font-weight:600;
  }

  
  &:hover{
    filter: brightness(0.8);
  }
}
`