import styled from "styled-components";

export const StyleButtonReset = styled.button`
  background-color: transparent;
  background-size: contain;
  background-position: center;
  background-repeat-y: no-repeat;
  display: flex;
  align-items: center;
  gap: 0.1rem;
  color: #fff;
  border: 0px;
  padding: 8px;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: all 0.1s ease-in;
  font-family: "Carter One", cursive;
  font-size: 18px;
  letter-spacing: 1px;
  color: #fff2a5;
  text-shadow: -1px 0 #986951, 0 1px #986951, 1px 0 #986951, 0 -1px #986951;

  &:hover {
    // background-color: #2f8ccb;
    // border: 2px solid #0868ac;
    color: #ffc652;
  }
`;
