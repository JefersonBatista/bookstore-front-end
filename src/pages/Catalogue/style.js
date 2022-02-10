import styled from "styled-components";

export const Page = styled.section`
  display: flex;
  flex-direction: column;
  gap: 15px;

  margin-top: 100px;
`;

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  font-family: "Roboto", sans-serif;
  font-size: 15px;

  img {
    width: 60px;
    height: 100px;
  }
`;
