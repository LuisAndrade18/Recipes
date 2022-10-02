import styled from "styled-components/macro";

export const NavbarMobile = styled.nav`
  width: 100%;
  display: flex;
  justify-content: end;

  @media (min-width: 1000px) {
    display: none;
  }
`;

export const MenuHamburgerIcon = styled.img`
  position: relative;
  width: 2rem;
  margin: 1.4rem 0.5rem 0 0;
`;

export const NavbarContent = styled.section`
  display: flex;
  position: absolute;
  padding: 2rem;
  width: calc(100vw - 16px);
  backdrop-filter: blur(2px);
  background-color: #dfe4de;
  opacity: 0;
  pointer-events: none;

  ${({ openMenu }) =>
    openMenu &&
    `
      opacity: 1;
      pointer-events: auto;
    `}

  @media(min-width: 1000px) {
    display: none;
  }
`;

export const CloseMenuIcon = styled.img`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 2rem;
`;

export const NavbarList = styled.ul`
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  font-weight: 700;
`;

export const ListItem = styled.li`
  margin-bottom: 2rem;
`;

export const SubscribesMobileButton = styled.a`
  padding: 0.8rem 1rem;
  font-size: 1.1rem;
  letter-spacing: 0.1rem;
  color: #373737;
  border: 3px solid #373737;
  background-color: transparent;

  &:hover {
    color: #ffffff;
    background-color: #373737;
  }
`;
