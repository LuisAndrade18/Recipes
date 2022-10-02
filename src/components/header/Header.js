import React from "react";
import * as S from "./Style";

import NavbarDesktop from "./components/NavbarDesktop/NavbarDesktop";
import NavbarMobile from "./components/NavbarMobile/NavbarMobile";

const Header = () => {
  return (
    <S.Header>
      <NavbarDesktop />
      <NavbarMobile />
      <S.BoxTitle>
        <S.Title>RECIPES</S.Title>
      </S.BoxTitle>
    </S.Header>
  );
};

export default Header;
