import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default.ts";
import { GlobalStyle } from "./styles/global.ts";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);
