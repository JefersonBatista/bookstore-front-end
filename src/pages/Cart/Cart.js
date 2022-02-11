import styled from "styled-components";
import TopBar from "../../components/TopBar/TopBar";
import CartsProducts from "./components/CartsProducts.js";
import Summary from "./components/Summary";
import { useState } from "react";

export default function Cart() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")));
  return (
    <div>
      <TopBar />
      <StyledContainer>
        <CartsProducts cart={cart} setCart={setCart} />
        <Summary cart={cart} />
      </StyledContainer>
    </div>
  );
}

const StyledContainer = styled.div`
  display: flex;
  margin-top: 88px;
  width: 100%;
  padding: 8px 120px;
  section:first-child {
    width: 75%;
  }
`;
