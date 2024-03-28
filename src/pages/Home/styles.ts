import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 100%;

  padding: 0px 16px;

  @media (min-width: 800px) {
    gap: 24px;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  row-gap: 16px;
  overflow-x: hidden;

  @media (min-width: 800px) {
    row-gap: 24px;
  }

  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const SpinnerContainer = styled.div`
  align-self: center;
  padding: 10px;
`;
