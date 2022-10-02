import React, { useState } from "react";
import * as S from "./Style";
import MenuHamburgerIcon from "../../../../assets/icons/menuHamburgerIcon.svg";
import CloseMenuIcon from "../../../../assets/icons/closeMenuIcon.svg";

const NavbarMobile = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <S.NavbarMobile>
      <S.MenuHamburgerIcon
        src={MenuHamburgerIcon}
        alt="Open menu"
        onClick={() => setOpenMenu(true)}
      />
      {openMenu && (
        <S.NavbarContent openMenu={openMenu}>
          <S.CloseMenuIcon
            src={CloseMenuIcon}
            alt="Close menu"
            onClick={() => setOpenMenu(false)}
          />
          <S.NavbarList>
            <S.ListItem>ABOUT</S.ListItem>
            <S.ListItem>RECIPES</S.ListItem>
            <li>
              <S.SubscribesMobileButton href="#Subs">
                SUBSCRIBES
              </S.SubscribesMobileButton>
            </li>
          </S.NavbarList>
        </S.NavbarContent>
      )}
    </S.NavbarMobile>
  );
};

export default NavbarMobile;
