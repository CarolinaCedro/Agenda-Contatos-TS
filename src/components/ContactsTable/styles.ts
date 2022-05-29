import styled from "styled-components";

export const Container = styled.main`
padding: 0rem 4rem;

`

export const Content = styled.div`

  width: 100%;
  display: flex;
  justify-content: center;

  input{
    width: 70%;
    height: 2.5rem;
    border-radius:0.25rem;
    border: 1px solid #4831D4;
    outline:none;
    padding-left:0.9rem
  }
`

export const Table = styled.table`
   display: flex;
   justify-content: center;
   width: 100%;

  table{
    width: 100%;
    margin-top: 2rem;
    padding: 10px 4rem;
    border-spacing: 0 0.5rem;
    text-align: left;

    th{

      font-weight: 400;
      padding: 0.5rem 2rem;
      text-align: left;
      line-height: 1.5rem;
      font-size:0.8rem;  
    }

    td{
      padding: 0.5rem 2rem;
      background: var(--white);
      border: 0;
      text-align:left;
      font-size:1rem;
    }
    &:first-child{
      color: var(--text-title);
    }

  }

`

