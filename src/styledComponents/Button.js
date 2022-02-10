import styled from "styled-components";

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "60px"};
  border-radius: 15px;
  background-color: ${({ highlighted }) => (highlighted ? "#fa9a42" : "white")};
  box-shadow: ${({ highlighted }) =>
    highlighted ? "none" : "2px 2px 2px 2px rgba(0, 0, 0, 0.2)"};
  border: none;

  font-weight: bold;
  font-size: ${({ fontSize }) => fontSize || "20px"};
  color: ${({ highlighted }) => (highlighted ? "white" : "#fa9a42")};

  cursor: pointer;
`;

export default Button;
