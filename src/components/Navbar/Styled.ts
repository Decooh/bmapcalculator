import styled from "styled-components";

export const NavbarContainer = styled.header`
  padding: 10px;
  color: #fff;
  box-shadow: rgb(0 0 0 / 20%) 0px 12px 20px 0px,
    rgb(0 0 0 / 12%) 0px 0px 2px 0px;
  background-color: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
`;

export const NavbarContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    cursor: pointer;
  }
`;

export const NavbarMenu = styled.div`
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 2rem;
    li {
      padding: 10px;
      font-size: 18px;
      font-family: "Carter One", cursive;
    }
  }
`;

export const ButtonMapCalculator = styled.button`
  width: 135px;
  height: 52px;
  background-image: url("https://bombcryptosimulator.com/img/buttonBlue.png");
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-shadow: 2px 2px 2px #111;
  font-size: 15px;
  font-family: "Carter One", cursive;
  border: 0px;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.1s ease-in;
  border-radius: 10px;

  &:hover {
    box-shadow: inset 0 0 10px 5px rgb(0 0 0 / 25%);
  }
`;
