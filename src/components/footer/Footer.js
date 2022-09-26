import React from 'react';
import Subs from './components/Subs';
import Nav from './components/Nav';
import Copyright from './components/Copyright';
import * as S from './Style';

const Footer = () => {
  return (
    <S.Footer>
      <Subs />
      <Nav />
      <Copyright />
    </S.Footer>
  );
};

export default Footer;
