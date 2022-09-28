import React from "react";
import MenuIcon from "../../assets/icons/menuIcon.svg";
import * as S from "./Style.js";

const Header = () => {
  return (
    <S.Header>
      <nav>
        <S.MenuDesktop>
          <div>
            <S.Logo>RC</S.Logo>
          </div>
          <S.BoxDesktopList>
            <S.DesktopList>
              <S.MenuDesktopItem>ABOUT</S.MenuDesktopItem>
              <S.MenuDesktopItem>RECIPES</S.MenuDesktopItem>
            </S.DesktopList>
            <S.SubscribesButton>SUBSCRIBES</S.SubscribesButton>
          </S.BoxDesktopList>
        </S.MenuDesktop>
        <S.BoxMenuHamburger>
          <S.MenuHamburger src={MenuIcon} alt="Menu hamburger" />
          <S.MenuMobileContent>
            <S.BoxMobileList>
              <S.MenuMobileItem>ABOUT</S.MenuMobileItem>
              <S.MenuMobileItem>RECIPES</S.MenuMobileItem>
              <li>
                <S.SubscribesButton>SUBSCRIBES</S.SubscribesButton>
              </li>
            </S.BoxMobileList>
          </S.MenuMobileContent>
        </S.BoxMenuHamburger>
      </nav>
      <S.BoxTitle>
        <S.Title>RECIPES</S.Title>
      </S.BoxTitle>
    </S.Header>
  );
};

export default Header;
