import { createGlobalStyle } from "styled-components";

export const GlobalStyles  = createGlobalStyle`

:root{
  --backgroundColor: #F0F2F5;
  --colorPrimary: #4831D4;
  --colorSecundary:#CCF381;
  --white:#FFFFFF;
  --black:#000000;
  --text-body:#ccc
  --text-title:#363f5f;

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

.react-modal-overlay{
  background: rgba(0,0,0,0.5);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.react-modal-content{
  width: 100%;
  max-width: 576px;
  background-color: white;
  padding: 3rem;
  position: relative;
  border-radius: 0.25rem;
}

.react-modal-button-close{
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  border: 0;
  background: transparent;
  transition: filter 0.2s;

}

.react-modal-button-close:hover{
    filter: brightness(0.5);
}

`