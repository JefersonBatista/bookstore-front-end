import styled from "styled-components";

export const StyledContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 800px;
  height: 100%;
  max-height: 800px;
  margin: 88px auto;
  padding: 48px;
  justify-content: center;
  align-items: center;
  box-shadow: 6px 5px 20px 22px rgba(255, 154, 66, 0.25);
  border-radius: 30px;
  a {
    font-family: "Roboto", sans-serif;
    margin-top: 36px;
    font-size: 15px;
    color: #ff9a42;
  }
`;

export const StyledTitle = styled.h1`
  font-family: "Balsamiq Sans", cursive;
  font-size: 32px;
  color: #ff9a42;
  margin-bottom: 24px;
`;

export const StyledForm = styled.form`
  display: grid;
  width: 90%;
  max-width: 326px;
  row-gap: 13px;
`;

export const StyledInput = styled.input`
  height: 58px;
  background: #ffffff;
  border-radius: 5px;
  border: 1px solid #ff0;
  padding-left: 15px;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  color: #000000;

  :focus {
    outline-color: #ff9a42;
  }
`;

export const StyledButton = styled.button`
  height: 46px;
  background: #ff9a42;
  border-radius: 5px;
  border: none;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 20px;
  color: #fff;
`;
