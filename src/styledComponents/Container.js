import styled from "styled-components";

 const Container = styled.main`
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

export default Container;