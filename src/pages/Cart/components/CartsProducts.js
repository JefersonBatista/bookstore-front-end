import styled from "styled-components";
import ProductCard from "./ProductCard";
import useCart from "../../../hooks/useCart";

export default function CartsProducts() {
  const { cart } = useCart();

  return (
    <section>
      <StyledTableHeaders>
        <h1>
          <strong>Carrinho de compras</strong>
        </h1>
      </StyledTableHeaders>
      {cart.length ? (
        <ul>
          {cart.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </ul>
      ) : (
        <></>
      )}
    </section>
  );
}

const StyledTableHeaders = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 8px;
  border-bottom: 1px solid grey;

  h1 {
    font-family: "Roboto", sans-serif;
    color: #4a4a4a;
    font-size: 20px;
  }
`;
