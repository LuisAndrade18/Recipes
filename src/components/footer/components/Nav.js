import React from 'react';
import Icons from './Icons';
import * as S from './../Style';

const Nav = () => {
  return (
    <S.Nav>
      <nav>
        <ul>
          <li>
            <a href="#About">ABOUT</a>
          </li>
          <li>RECIPES</li>
          <li>
            <a href="#Subs">SUBSCRIBE</a>
          </li>
        </ul>
      </nav>

      <Icons />
    </S.Nav>
  );
};

export default Nav;
