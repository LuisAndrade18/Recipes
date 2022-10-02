import styled from 'styled-components/macro';
import Background from '../../assets/images/background.png';

export const Header = styled.header`
  height: 53rem;
  margin: 1rem 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  font-family: "HURME GEOMETRIC";
  background-image: url(${Background});
  background-size: cover;
  background-position: 80%;
  background-repeat: no-repeat;
`;

export const BoxTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 49.6rem;
 
  @media (min-width: 1000px) {
    position: relative;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  letter-spacing: 0.9rem;
  font-family: "HURME GEOMETRIC S.B.";
 
  @media (min-width: 1000px) {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%);
    font-size: 8.5rem;
    letter-spacing: 0.9rem;
  }
`