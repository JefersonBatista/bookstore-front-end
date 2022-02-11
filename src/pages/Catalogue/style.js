import styled from "styled-components";

export const Page = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  row-gap: 30px;
  column-gap: 15px;
  flex-wrap: wrap;

  margin-top: 90px;
  padding: 30px;
`;

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 5px;

  width: 200px;

  font-family: "Roboto", sans-serif;
  font-size: 15px;
  text-align: center;

  img {
    width: 60px;
    height: 100px;
  }

  .author {
    color: #606060;
  }

  .price {
    font-size: 19px;
    color: #fa9a42;
  }
`;
