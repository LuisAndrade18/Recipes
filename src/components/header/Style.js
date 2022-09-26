import styled from "styled-components";
import Background from "../../assets/images/background.png";

export const Header = styled.header`
  height: 53rem;
  margin: 1rem 0.5rem 0.5rem;
  display: flex;
  flex-direction: column;
  background-image: url(${Background});
  background-size: cover;
  background-position: 80%;
  background-repeat: no-repeat;
  font-family: "HURME GEOMETRIC";
`;

export const SubscribesButton = styled.button`
  padding: 0.5rem 3rem;
  font-family: "HURME GEOMETRIC";
  font-size: 1.2rem;
  color: #373737;
  border: 5px solid #373737;
  background-color: transparent;
`;

export const BoxMenuHamburger = styled.figure`
  width: 100%;
  display: flex;
  justify-content: end;

  @media (min-width: 1000px) {
    display: none;
  }
`;

export const MenuHamburger = styled.img`
  position: relative;
  width: 2rem;
  margin: 1.4rem 0.5rem 0 0;
`;

export const MenuMobileContent = styled.div`
  display: none; /* só fica flex quando clicar no menu hamburguer */
  position: absolute;
  padding: 2rem;
  width: calc(100vw - 16px);
  background-color: #dfe4de;
`;

export const BoxMobileList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
`;

export const MenuMobileItem = styled.li`
  margin-bottom: 2rem;
`;

export const BoxTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 49.6rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
`;
