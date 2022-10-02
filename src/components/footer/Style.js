import styled from "styled-components/macro";

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Subs = styled.div`
  width: 100%;
  height: 80vh;
  min-height: 400px;
  background-color: #dfe4de;
  font-family: "HURME GEOMETRIC";
  display: flex;
  align-items: center;
  justify-content: center;
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  div {
    width: 100%;
    max-width: 650px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h2 {
    font-size: 2rem;
    font-family: "HURME GEOMETRIC S.B.";
    letter-spacing: 4.2px;
  }
  h4 {
    margin: 15px;
    text-align: center;
    font-size: 1.6rem;
    font-family: "HURME GEOMETRIC L.";
    letter-spacing: 2px;
  }
  input {
    width: 95%;
    height: 8.5vh;
    min-height: 80px;
    padding-left: 20px;
    border: none;
    margin: 16px;
    background-color: #eff1ee;
    font-size: 1.2rem;
    font-family: "HURME GEOMETRIC L.";
  }
  input::placeholder {
    font-size: 18px;
    font-family: "HURME GEOMETRIC L.";
    color: #707070;
  }
  button {
    width: 95%;
    max-width: 420px;
    height: 9vh;
    min-height: 60px;
    letter-spacing: 6px;
    font-size: 1.2rem;
    background: none;
    border: solid 6px #373737;
    cursor: pointer;
    color: #373737;
    font-family: "HURME GEOMETRIC S.B.";
  }

  @media (min-width: 770px) {
    button {
      width: 30%;
    }
  }

  @media (min-width: 1000px) {
    button {
      height: 6vh;
      margin: 10px;

      :hover {
        cursor: pointer;
        color: #ffffff;
        background-color: #373737;
      }
    }
  }
`;

export const Nav = styled.div`
  width: 100%;
  background-color: #f2f4f1;
  font-family: "HURME GEOMETRIC";
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  nav {
    margin: 20% 0 10%;
  }
  ul {
    width: 100%;
    letter-spacing: 2.52px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  li {
    font-size: 1.5rem;
    margin: 15px;
    padding: 5px;
  }
  li:hover {
    cursor: pointer;
    background-color: #dfe4de;
    border-radius: 5px;
  }

  @media (min-width: 770px) {
    nav {
      margin: 10% 0 5%;
    }
  }
  @media (min-width: 1000px) {
    height: 35vh;
    min-height: 300px;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;

    nav {
      width: 450px;
      margin: 10% 5%;
    }
    ul {
      flex-direction: row;
    }
    li {
      margin: 0;
      font-size: 1.2rem;
    }
  }
`;

export const Icons = styled.div`
  width: 70%;
  max-width: 300px;
  margin-bottom: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  figure {
    width: 20%;
  }
  img {
    width: 100%;
  }
  img:hover {
    animation: click 0.3s forwards;
  }
  @keyframes click {
    from {
      width: 100%;
    }
    to {
      width: 90%;
    }
  }

  @media (min-width: 770px) {
    margin-bottom: 10%;
  }

  @media (min-width: 1000px) {
    width: 17%;
    margin-bottom: 0;
    margin-left: 5%;
  }
`;

export const Copyrigth = styled.div`
  width: 100%;
  height: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #446061;
  div {
    width: 94%;
    font-size: 0.52rem;
    opacity: 0.5;
    word-break: break-all;
  }

  @media (min-width: 770px) {
    div {
      font-size: 0.8vw;
      text-align: center;
    }

    p {
      letter-spacing: 1.68px;
    }
  }
`;
