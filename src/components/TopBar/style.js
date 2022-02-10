import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100vw;
  padding: 15px 30px;
  box-shadow: 0 3px 3px 3px rgba(150, 150, 150, 0.25);
`;

export const Options = styled.div`
  display: flex;
  gap: 15px;
  width: 350px;
`;
