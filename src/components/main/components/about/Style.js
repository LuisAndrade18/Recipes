import styled from 'styled-components/macro';

export const About = styled.div`
  width: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  h2 {
    font-size: 3rem;
    font-family: 'HURME GEOMETRIC S.B.';
    letter-spacing: 1.5px;
  }
  p {
    width: 94%;
    max-width: 500px;
    font-size: 1.2rem;
    text-align: left;
  }

  @media (min-width: 1000px) {
    height: 50vw;
    flex-direction: row;
    justify-content: space-between;
    h2 {
      font-size: 2rem;
    }
    p {
      width: 63%;
      font-size: 1.1vw;
      max-width: none;
    }
  }
`;

export const Image = styled.figure`
  width: 100%;
  height: 100%;
  object-fit: cover;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (min-width: 1000px) {
    width: 50%;
  }
`;

export const Text = styled.div`
  height: 100vh;
  margin-top: 20px;
  max-height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  div {
    height: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }

  @media (min-width: 1000px) {
    width: 50%;
    height: 60%;
  }
`;

export const Line = styled.span`
  width: 45%;
  height: 0px;
  background-color: #373737;
  max-width: 90px;
  border: solid 2px;
`;
