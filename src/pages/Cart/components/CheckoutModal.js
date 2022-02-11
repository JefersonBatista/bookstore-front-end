import Modal from "react-modal";
import { useState } from "react";
import styled from "styled-components";
import useCart from "../../../hooks/useCart";

export default function CheckoutModal({ toggleModal, isOpen }) {
  const [paymentWay, setPaymentWay] = useState(0);
  const { cart } = useCart();
  function requestCheckout(e) {
    e.preventDefault();
    const { token } = JSON.parse(localStorage.getItem("session"));
    console.log(cart);
    console.log(token);
  }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={toggleModal}
      style={customStyles}
      contentLabel="checkout Modal"
    >
      <h2>Escolha o método de pagamento</h2>
      <StyledForm onSubmit={requestCheckout}>
        <div>
          <h2>Cartão de crédito</h2>
          <StyledOption
            onClick={() => setPaymentWay(1)}
            isSelected={paymentWay === 1}
          />
        </div>
        <div>
          <h2>Boleto</h2>
          <StyledOption
            onClick={() => setPaymentWay(2)}
            isSelected={paymentWay === 2}
          />
        </div>
        <div>
          <h2>Pix</h2>
          <StyledOption
            onClick={() => setPaymentWay(3)}
            isSelected={paymentWay === 3}
          />
        </div>
        <div className="real-buttons">
          <button type="submit">Enviar</button>
          <button onClick={toggleModal}>Cancelar</button>
        </div>
      </StyledForm>
    </Modal>
  );
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
const StyledOption = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 32px;
  height: 32px;
  border-radius: 15px;
  background-color: ${({ isSelected }) => (isSelected ? "#fa9a42" : "#ffb57f")};
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  border: none;

  cursor: pointer;
`;
const StyledForm = styled.form`
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 8px 0;
  }
  .real-buttons button {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 32px;
    border-radius: 15px;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
    border: none;

    cursor: pointer;
    width: 64px;
    background-color: #fa9a42;
    font-weight: bold;
    font-size: 13px;
    color: white;
  }
`;
