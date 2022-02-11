import styled from "styled-components";
import ProductCard from "./ProductCard";

export default function CartsProducts() {
  const cartProducts = JSON.parse(localStorage.getItem("cart"));
  return (
    <StyledContainer>
      <section>
        <StyledTableHeaders>
          <h1>
            <strong>Carrinho de compras</strong>
          </h1>
        </StyledTableHeaders>
        <ul>
          {cartProducts.map(
            ({ title, author, image, quantity, price, id }, index) => (
              <ProductCard
                key={index}
                index={index}
                title={title}
                author={author}
                image={image}
                quantity={quantity}
                price={Number(price).toFixed(2)}
                id={id}
              />
            )
          )}
        </ul>
      </section>
    </StyledContainer>
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
