import styled from 'styled-components';

export const About = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  h2 {
    font-size: 3rem;
    font-family: 'HURME GEOMETRIC S.B.';
    letter-spacing: 1.5px;
  }
  img {
    width: 100%;
  }
  p {
    width: 94%;
    max-width: 500px;
    font-size: 1.2rem;
    text-align: left;
  }

  @media (min-width: 1000px) {
    flex-direction: row;
    justify-content: space-between;
    img{
      width: 50%;
    }
    figure {
      width: 50%;
    }
    p {
      width: 65%;
      font-size: 1vw;
      max-width: none;
    }
  }
`;

export const Text = styled.div`
  height: 100vh;
  max-height: 700px;
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
    height: 100%;
  }
`;

export const Line = styled.span`
  width: 45%;
  height: 0;
  max-width: 90px;
  border: solid 4px;
`;
