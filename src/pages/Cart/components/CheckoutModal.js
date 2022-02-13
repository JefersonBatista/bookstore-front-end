import Modal from "react-modal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import useCart from "../../../hooks/useCart";
import api from "../../../services/api";

export default function CheckoutModal({ toggleModal, isOpen }) {
  const navigate = useNavigate();

  const [paymentWay, setPaymentWay] = useState("");
  const { cart, resetCart } = useCart();

  async function requestCheckout(e) {
    e.preventDefault();

    const { token } = JSON.parse(localStorage.getItem("session"));
    const purchase = {
      items: cart.map((item) => ({
        _id: item._id,
        quantity: item.quantityInCart,
      })),
      paymentWay,
    };

    try {
      await api.checkout(purchase, token);

      resetCart();
      navigate("/");
    } catch (error) {
      alert(error.response.data);
    }
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
            onClick={() => setPaymentWay("credit card")}
            isSelected={paymentWay === "credit card"}
          />
        </div>
        <div>
          <h2>Boleto</h2>
          <StyledOption
            onClick={() => setPaymentWay("billet")}
            isSelected={paymentWay === "billet"}
          />
        </div>
        <div>
          <h2>Pix</h2>
          <StyledOption
            onClick={() => setPaymentWay("pix")}
            isSelected={paymentWay === "pix"}
          />
        </div>
        <div className="real-buttons">
          <button type="submit">Enviar</button>
          <button type="button" onClick={toggleModal}>
            Cancelar
          </button>
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
