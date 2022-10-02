import styled from "styled-components/macro";

export const NavbarDesktop = styled.section`
  padding: 2rem 3.3rem 0 3.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const Logo = styled.h2`
  font-size: 2.3rem;
  font-family: "HURME GEOMETRIC S.B.";
`;

export const NavbarList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ListItem = styled.li`
  margin-left: 5.5rem;
  letter-spacing: 0.1rem;
  font-size: 1.2rem;

  &:hover,
  ::after {
    display: inline-block;
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
    color: #FFFFFF;
    background-color: #373737;
  }
`;

