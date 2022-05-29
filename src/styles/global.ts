import { createGlobalStyle } from "styled-components";

export const GlobalStyles  = createGlobalStyle`

:root{
  --backgroundColor: #F0F2F5;
  --colorPrimary: #4831D4;
  --colorSecundary:#CCF381;
}

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}


html{
  @media  (max-width:1080px) {
    font-size: 93.75%;
  }
  @media  (max-width:780px) {
    font-size: 87.5%;
  }
}

body{
  background-color: var(--backgroundColor);
  -webkit-font-smoothing:antialiased;
}

body,input,button,textArea{
  font-family: 'Open Sans', sans-serif;
  font-weight:400;
}

h1,h2,h3,h4,h5,h6,strong{
  font-weight:600;
}

button{
  cursor: pointer;
  font-family: 'Open Sans', sans-serif;
}

[disable]{
  opacity: 0.6;
  cursor: not-allowed;
}

`