import styled from "styled-components";

export const MainContent = styled.main`
  margin: 0 auto;
  max-width: 800px;
`;

export const Container = styled.div`
  margin: 1rem;
  padding: 1rem;
  font-size: 2rem;
  background-color: rgba(0, 0, 0, 0.25);
  color: #fff;
  border-radius: 1rem;
  backdrop-filter: blur(10px);
  font-size: 18px;
`;

export const ContainerMapCalculator = styled.div`
  background-color: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
  padding: 1rem;
  border-radius: 0.5rem;
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-direction: column;
  color: #fff;
`;

export const ContainerResults = styled.div`
  font-size: 30px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const BoxList = styled.ul`
  margin: 0px;
  padding: 0px;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const BoxListItem = styled.li`
  display: flex;
  gap: 1rem;
  align-items: center;

  div#imageContainer {
    font-weight: 200;
    font-size: 12px;
    text-align: center;
  }

  div.count {
    font-size: 25px;
    // padding: 10px;
  }

  svg {
    cursor: pointer;
  }
`;

export const ButtonMore = styled.button`
  background-color: transparent;
  border: 0;
`;

export const ButtonMinus = styled.button`
  background-color: transparent;
  border: 0;
`;

export const DonationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;

  h1 {
    font-size: 26px;
    margin: 0;
    padding: 0;
    color: #f5cb5f;
  }

  h2 {
    font-weight: 400;
    font-size: 20px;
    margin: 0;
    padding: 0;
    color: #60a1f3;
  }

  h3 {
    font-weight: 200;
    font-size: 18px;
    margin: 0;
    padding: 0;
    color: #db4a6f;
  }

  span {
    font-size: 16px;
    font-weight: 200;
  }
`;
