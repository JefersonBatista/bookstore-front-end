import { useState, useEffect } from "react";

import api from "../../services/api";
import TopBar from "../../components/TopBar/TopBar";

import { Page, Card } from "./style";

export default function Catalogue() {
  const [products, setProducts] = useState(null);

  async function getProducts() {
    const response = await api.getProducts();
    setProducts(response.data);
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

      {products.map((product) => (
        <Card key={product._id}>
          <img src={product.image} alt="Imagem do produto" />
          <strong>{product.title}</strong>
          <span>{product.author}</span>
          <strong>
            R${" "}
            {product.price.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </strong>
        </Card>
      ))}
    </Page>
  );
}
