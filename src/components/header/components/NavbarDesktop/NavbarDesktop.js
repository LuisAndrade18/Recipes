import React from "react";
import * as S from "./Style.js";

const NavbarDesktop = () => {
  return (
    <S.NavbarDesktop>
      <S.Logo>RC</S.Logo>
      <S.NavbarList>
        <S.ListItem>
          <a href="#About">ABOUT</a>
        </S.ListItem>
        <S.ListItem>
          <a href="#Recipes">RECIPES</a>
        </S.ListItem>
        <S.SubscribesButton href="#Subs">SUBSCRIBES</S.SubscribesButton>
      </S.NavbarList>
    </S.NavbarDesktop>
  );
};

export default NavbarDesktop;
