import styled from "styled-components";
import Background from "../../assets/images/background.png";

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

export const MenuDesktop = styled.section`
  padding: 2rem 3.3rem 0 3.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const Logo = styled.h1`
  font-size: 2.3rem;
  font-family: "HURME GEOMETRIC S.B.";
`;

export const BoxDesktopList = styled.div`
  display: flex;
`;

export const DesktopList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MenuDesktopItem = styled.li`
  margin-left: 5.5rem;
  letter-spacing: 0.1rem;
  font-size: 1.2rem;

  &:hover,
  ::after {
    $display: inline-block;
    content: " ";
    cursor: pointer;
    border-bottom: 0.2rem solid #373737;
  }
`;

export const SubscribesButton = styled.a`
  margin-left: 5.5rem;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  letter-spacing: 0.1rem;
  color: #373737;
  border: 4px solid #373737;
  background-color: transparent;

  &:hover {
    cursor: pointer;
    color: #ffffff;
    background-color: #373737;
  }
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

  @media (min-width: 1024px) {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%);
    font-size: 8.5vw;
    letter-spacing: 0.9rem;
  }
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
  display: flex;
  position: absolute;
  ${"" /* top: 1rem; */}
  z-index: 6; 
  padding: 2rem;
  width: calc(100vw - 16px);
  backdrop-filter: blur(2px);
  background-color: #dfe4de;
  opacity:   0;
  pointer-events: none;

  ${({ Active }) =>
    Active &&
    `
      opacity: 1;
      pointer-events: auto;
    `}

  @media(min-width: 1000px) {
    display: none;
  }
`;

export const CloseMenuMobile = styled.figure`
  padding:1rem;
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
