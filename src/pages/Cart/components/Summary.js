import styled from "styled-components";
import Button from "../../../styledComponents/Button";
import { useState } from "react";
import CheckoutModal from "./CheckoutModal";
import useCart from "../../../hooks/useCart";

export default function Summary() {
  const { cart } = useCart();
  const [modalIsOpen, setIsOpen] = useState(false);
  const total = cart.reduce(
    (acc, curr) => acc + curr.price * curr.quantityInCart,
    0
  );
  const session = localStorage.getItem("session");
  function toggleModal() {
    if (!session) return alert("Por favor, faça login para continuar");
    setIsOpen(!modalIsOpen);
  }

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
          <strong>
            R${" "}
            {total.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </strong>
        </h1>
      </div>
      <Button highlighted width={"150px"} height={"44px"} onClick={toggleModal}>
        Fechar pedido
      </Button>
      <CheckoutModal toggleModal={toggleModal} isOpen={modalIsOpen} />
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
