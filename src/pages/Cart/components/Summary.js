import styled from "styled-components";
import Button from "../../../styledComponents/Button";
export default function Summary({ cart }) {
  const total = cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
  return (
    <StyledContainer>
      <h2>
        <strong>Resumo</strong>
      </h2>
      <hr />
      <div>
        <h1>
          <strong>Total</strong>
        </h1>
        <h1>
          <strong>R$ {total}</strong>
        </h1>
      </div>
      <Button highlighted width={"150px"} height={"44px"}>
        Fechar pedido
      </Button>
    </StyledContainer>
  );
}

const StyledContainer = styled.section`
  padding: 30px;
  h1 {
    font-family: "Roboto", sans-serif;
    color: #202124;
    font-size: 18px;
  }
  h2 {
    font-family: "Roboto", sans-serif;
    color: #4a4a4a;
    font-size: 16px;
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
  }
`;
