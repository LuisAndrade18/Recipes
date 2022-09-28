import React from 'react';
import * as S from './../Style';
import Insta from '../../../assets/icons/instagramIcon.svg';
import Twitter from '../../../assets/icons/twitterIcon.svg';
import Face from '../../../assets/icons/facebookIcon.svg';
import Pint from '../../../assets/icons/pinterestIcon.svg';

const IconsImg = [
  {
    icon: Insta,
    alt: 'icone do Instagram',
  },
  {
    icon: Twitter,
    alt: 'icone do Twitter',
  },
  {
    icon: Face,
    alt: 'icone do Facebook',
  },
  {
    icon: Pint,
    alt: 'icone do Pinterest',
  },
];

const Icons = () => {
  return (
    <S.Icons>
      {IconsImg.map((item, index) => (
        <figure>
          <img key={index} src={item.icon} alt={item.alt} />
        </figure>
      ))}
    </S.Icons>
  );
};

export default Icons;
