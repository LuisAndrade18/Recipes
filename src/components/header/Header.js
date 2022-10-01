import React, { useState } from "react";
import MenuIcon from "../../assets/icons/menuIcon.svg";
import CloseMenuMobile from "../../assets/icons/closeMenuMobile.svg";
import * as S from "./Style.js";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  console.log(openMenu);

  return (
    <S.Header>
      <nav>
        <S.MenuDesktop>
          <div>
            <S.Logo>RC</S.Logo>
          </div>
          <S.BoxDesktopList>
            <S.DesktopList>
              <S.MenuDesktopItem>
                <a href="#About">ABOUT</a>
              </S.MenuDesktopItem>
              <S.MenuDesktopItem>RECIPES</S.MenuDesktopItem>
              <S.SubscribesButton href="#Subs">SUBSCRIBES</S.SubscribesButton>
            </S.DesktopList>
          </S.BoxDesktopList>
        </S.MenuDesktop>
        <S.BoxMenuHamburger>
          <S.MenuHamburger
            src={MenuIcon}
            alt="Open hamburger"
            onClick={() => setOpenMenu(true)}
          />
          {openMenu && (
            <S.MenuMobileContent openMenu={openMenu}>
              <S.CloseMenuMobile
                src={CloseMenuMobile}
                alt="Close menu"
                onClick={() => setOpenMenu(false)}
              />
              <S.BoxMobileList>
                <S.MenuMobileItem>ABOUT</S.MenuMobileItem>
                <S.MenuMobileItem>RECIPES</S.MenuMobileItem>
                <li>
                  <S.SubscribesMobileButton href="#Subs">
                    SUBSCRIBES
                  </S.SubscribesMobileButton>
                </li>
              </S.BoxMobileList>
            </S.MenuMobileContent>
          )}
        </S.BoxMenuHamburger>
      </nav>
      <S.BoxTitle>
        <S.Title>RECIPES</S.Title>
      </S.BoxTitle>
    </S.Header>
  );
};

export default Header;
