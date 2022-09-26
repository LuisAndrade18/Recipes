import React from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import * as S from './theme/GlobalStyle';

function App() {
  return (
    <div>
      <S.GLobalStyle />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
