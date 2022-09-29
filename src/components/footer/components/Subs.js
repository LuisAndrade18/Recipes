import React, { useState } from 'react';
import Swal from 'sweetalert2';
import validator from 'validator';
import welcome from '../../../assets/images/background.png';
import * as S from './../Style';

const Subs = () => {
  const [email, setEmail] = useState('');

  const inpStyle = () => {
    document.querySelector('input').style.outline = 'none';
  }

  const Wellcome = () => {
    if (!email) {
      Swal.fire({
        icon: 'info',
        title: 'Atenção:',
        text: 'É necessario preencher o campo!',
        showConfirmButton: false,
        timer: 2000,
      });
    } else if (validator.isEmail(email)) {
      Swal.fire({
        title: 'Bem Vindo(a):',
        text: 'Newsletter agradece sua inscrição!',
        imageUrl: `${welcome}`,
        imageHeight: 200,
        showConfirmButton: false,
        timer: 4000,
      });
      setEmail('');
    } else {
      Swal.fire({
        icon: 'question',
        title: 'Não foi possível reconhecer:',
        text: 'Use um email valido.',
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };
  return (
    <S.Subs id='Subs'>
      <div>
        <h2>SUBSCRIBE</h2>
        <h4>Sign up for newsletter</h4>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            onFocus={inpStyle}
            placeholder="Your Email"
            type="text"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
          <button onClick={() => Wellcome()}>SUBMIT</button>
        </form>
      </div>
    </S.Subs>
  );
};

export default Subs;
