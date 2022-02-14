import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import api from "../../services/api";
import useCart from "../../hooks/useCart";
import TopBar from "../../components/TopBar/TopBar";
import { Button } from "../../styledComponents";

import { Page, Card } from "./style";

export default function Catalogue() {
  const navigate = useNavigate();

  const [products, setProducts] = useState(null);

  const { cart, addToCart } = useCart();

  function getProductInCart(id) {
    return cart.find((product) => product._id === id);
  }

  function productButtonText(id) {
    const productInCart = getProductInCart(id);
    if (productInCart) {
      return "Ir para o carrinho";
    } else {
      return "Adicionar ao carrinho";
    }
  }

  function productCartInfo(id) {
    const productInCart = getProductInCart(id);

    if (productInCart) {
      const qtd = productInCart.quantityInCart;

      if (qtd === 1) {
        return "Produto já adicionado ao carrinho";
      } else {
        return `${qtd} un. deste produto já estão no carrinho`;
      }
    } else {
      return "";
    }
  }

  function productButtonAction(product) {
    const productInCart = getProductInCart(product._id);
    if (productInCart) {
      return () => navigate("/cart");
    } else {
      return () => addToCart(product);
    }
  }

  async function getProducts() {
    try {
      const response = await api.getProducts();
      setProducts(response.data);
    } catch (error) {
      alert(error.response.data);
    }
  }

  useEffect(() => getProducts(), []);

  if (products === null) {
    return (
      <Page>
        <TopBar />

        <strong>Carregando...</strong>
      </Page>
    );
  }

  return (
    <Page>
      <TopBar />

      {products.map((product, index) => (
        <Card key={index}>
          <img src={product.image} alt="Imagem do produto" />
          <strong>{product.title}</strong>
          <span className="author">{product.author}</span>
          <strong className="price">
            R${" "}
            {product.price.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </strong>

          <span className="cart-info">{productCartInfo(product._id)}</span>

          <Button
            disabled={product.quantity < 1}
            highlighted={product.quantity > 0}
            width="150px"
            height="40px"
            fontSize="14px"
            onClick={productButtonAction(product)}
          >
            {product.quantity > 0
              ? productButtonText(product._id)
              : "Sem estoque"}
          </Button>
        </Card>
      ))}
    </Page>
  );
}
