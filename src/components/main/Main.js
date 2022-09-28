import React from "react";
import LatestRecipes from "./components/latestRecipes/LatestRecipes";
import About from './components/about/About'
import * as S from "./Style.js";

const Main = () => {
  return (
    <S.Main>
      <LatestRecipes />
      <About/>
    </S.Main>
  );
}

export default Main