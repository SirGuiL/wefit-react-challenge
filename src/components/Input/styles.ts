import styled from "styled-components";

export const Container = styled.div`
  background: #ffffff;
  padding-right: 16px;

  width: 100%;
  height: 56px;

  border-radius: 8px;
  border: 2px solid #ffffff;

  display: flex;
  align-items: center;
  gap: 16px;

  button {
    display: flex;
    background: transparent;
    border: 0;
    outline: none;

    cursor: pointer;
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  border: 0;
  outline: none;

  padding: 16px 16px 16px 16px;

  font-family: "Open Sans", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 136.1875%;
  text-align: left;

  &::placeholder {
    font-family: "Open Sans", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 136.1875%;
    text-align: left;
  }
`;
