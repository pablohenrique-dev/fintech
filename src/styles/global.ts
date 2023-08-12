import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Readex Pro', sans-serif;
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

  ::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: ${(props) => props.theme["bg-900"]};
}

::-webkit-scrollbar-thumb {
  background: #555;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: ${(props) => props.theme["bg-700"]};
}
`;
