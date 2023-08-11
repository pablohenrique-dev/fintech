import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }

  html {
    font-size: 62.5%;
  }

  body{
    background: ${(props) => props.theme["bg-800"]}
  }

  main{
    display: grid;
    grid-template-columns: 30rem auto;
    
  }
`;
