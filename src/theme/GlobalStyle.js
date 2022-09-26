import { createGlobalStyle } from 'styled-components';
import Hurme from '../assets/fonts/HurmeRegular.otf';
import HurmeL from '../assets/fonts/HurmeLight.otf';
import HurmeSB from '../assets/fonts/HurmeSemiBold.otf';

export const GLobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }
  
  body {   
    color: #373737;
  }

  @font-face {
    font-family: 'HURME GEOMETRIC';
    src: url('${Hurme}');
  }
  @font-face {
    font-family: 'HURME GEOMETRIC L.';
    src: url('${HurmeL}');
  }
  @font-face {
    font-family: 'HURME GEOMETRIC S.B.';
    src: url('${HurmeSB}');
  }
`;
