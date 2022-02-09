import styled from "styled-components";

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "60px"};
  border-radius: 15px;
  background-color: ${({ highlighted }) => (highlighted ? "#fa9a42" : "white")};

  font-weight: bold;
  font-size: ${({ fontSize }) => fontSize || "20px"};
  color: ${({ highlighted }) => (highlighted ? "white" : "#fa9a42")};
`;
 
export default Button;
