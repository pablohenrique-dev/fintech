import { styled, createGlobalStyle, keyframes } from "styled-components";

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

export const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 28rem 1fr;
`;

export const fadeRight = keyframes`
  from{
    opacity: 0;
    transform: translateX(-20px);
  }
  to{
    opacity: 1;
    transform: translateX(0);
  }
`;

export const PageContainer = styled.section`
  padding: 2.4rem;
  display: flex;
  gap: 2.4rem;
  flex-direction: column;
  animation: ${fadeRight} .3s forwards;
`;
