import React from 'react';
import Icons from './Icons';
import * as S from './../Style';

const Nav = () => {
  return (
    <S.Nav>
    
        <nav>
          <ul>
            <li>ABOUT</li>
            <li>RECIPES</li>
            <li>SUBSCRIBE</li>
          </ul>
      </nav>
      
      <Icons />
    </S.Nav>
  );
};

export default Nav;
