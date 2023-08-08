import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createGlobalStyle } from "styled-components";
import PokemonProvider from "./contexts/PokemonContext";
import { ChakraProvider } from "@chakra-ui/react";

const GlobalStyle = createGlobalStyle`
  
  * {
    margin: 0 ;
    padding: 0;
  }
  
  body {
  
  font-family: 'Inter', sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #5d5d5d !important;
}

code {
  font-family: sans-serif;
}
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <PokemonProvider>
      <ChakraProvider>
        <React.StrictMode>
          <GlobalStyle />
          <App />
        </React.StrictMode>
      </ChakraProvider>
  </PokemonProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
