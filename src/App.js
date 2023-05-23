import React from "react"
import Filmes from "./Components/Filmes/filmes"
import Header from "./Components/Header/header"
import Main from "./Components/Main/main"
import Series from "./Components/Séries/séries"
import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
`;

export default function App (){
  return(
    <>
    <GlobalStyle />
      <Header />
      <Main />
      <Filmes />
      <Series />
    </>
  )
}