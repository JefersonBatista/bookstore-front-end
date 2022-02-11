import styled from "styled-components";
import ProductCard from "./ProductCard";

export default function CartsProducts({ cart, setCart }) {
  return (
    <section>
      <StyledTableHeaders>
        <h1>
          <strong>Carrinho de compras</strong>
        </h1>
      </StyledTableHeaders>
      <ul>
        {cart.map(({ title, author, image, quantity, price, id }, index) => (
          <ProductCard
            key={index}
            index={index}
            title={title}
            author={author}
            image={image}
            quantity={quantity}
            price={Number(price).toFixed(2)}
            id={id}
            setCart={setCart}
            cart={[...cart]}
          />
        ))}
      </ul>
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
