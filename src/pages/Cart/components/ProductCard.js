import {
  AiFillPlusCircle as PlusCircle,
  AiFillMinusCircle as MinusCircle,
} from "react-icons/ai";
import { useState } from "react";
import styled from "styled-components";

export default function ProductCard({
  title,
  author,
  image,
  quantity,
  price,
  id,
}) {
  const [quantityInCart, setQuantityInCart] = useState(quantity);
  const cartProducts = JSON.parse(localStorage.getItem("cart"));
  const totalPrice =
    "R$ " + (price.replace("R$", "") * quantityInCart).toFixed(2);
  function updateQuantity(newQuantity) {
    const indexThisProduct = cartProducts.findIndex(
      (product) => product.id === id
    );
    setQuantityInCart(newQuantity);
    cartProducts[indexThisProduct].quantity = newQuantity;
    localStorage.setItem("cart", JSON.stringify(cartProducts));
  }

  return (
    <StyledProductCard>
      <StyledProductInfo>
        <img src={image} alt={title} />
        <div>
          <h3>
            <strong>{title}</strong>
          </h3>
          <p>{author}</p>
        </div>
      </StyledProductInfo>
      <StyledCounter>
        <button onClick={() => updateQuantity(quantityInCart - 1)}>
          <MinusCircle style={styleButtonIcon} />
        </button>
        <h1>
          <strong>{quantityInCart}</strong>
        </h1>
        <button onClick={() => updateQuantity(quantityInCart + 1)}>
          <PlusCircle style={styleButtonIcon} />
        </button>
      </StyledCounter>
      <StyledPrice>
        <h2>Preço</h2>
        <h1>
          <strong>R$ {price}</strong>
        </h1>
      </StyledPrice>
      <StyledPrice>
        <h2>Total</h2>
        <h1>
          <strong>{totalPrice}</strong>
        </h1>
      </StyledPrice>
    </StyledProductCard>
  );
}
const styleButtonIcon = {
  color: "#fa9a42",
  fontSize: "32px",
};
const StyledProductInfo = styled.ul`
  display: flex;
  width: 40%;
  img {
    width: 91px;
    height: 138px;
    margin-right: 16px;
    object-fit: contain;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
  }
  h3 {
    font-family: "Roboto", sans-serif;
    color: #202134;
    font-size: 13px;
  }
  p {
    font-family: "Roboto", sans-serif;
    font-size: 13px;
    color: #464646;
  }
`;

const StyledCounter = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 10%;
  button {
    background: none;
    border: none;
  }
  h1 {
    font-family: "Roboto", sans-serif;
    font-size: 24px;
  }
`;

const StyledProductCard = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 16px 0;
  border-bottom: 1px solid grey;
`;

const StyledPrice = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  h1 {
    font-family: "Roboto", sans-serif;
    color: #4a4a4a;
    font-size: 20px;
  }
  h2 {
    font-family: "Roboto", sans-serif;
    color: #2d2d2d;
    font-size: 16px;
  }
`;
