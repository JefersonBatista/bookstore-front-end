import { useState, useEffect } from "react";

import api from "../../services/api";
import TopBar from "../../components/TopBar/TopBar";
import { Button } from "../../styledComponents";

import { Page, Card } from "./style";

export default function Catalogue() {
  const [products, setProducts] = useState(null);

  async function getProducts() {
    const response = await api.getProducts();
    const productsData = [];

    for (let i = 0; i < 5; i++) {
      response.data.forEach((product) => {
        productsData.push(product);
      });
    }

    // setProducts(response.data);
    setProducts(productsData);
  }

  useEffect(() => getProducts(), []);

  if (products === null) {
    return (
      <section>
        <TopBar />

        <h1>Carregando...</h1>
      </section>
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

          <Button highlighted width="150px" height="40px" fontSize="14px">
            Adicionar ao carrinho
          </Button>
        </Card>
      ))}
    </Page>
  );
}
