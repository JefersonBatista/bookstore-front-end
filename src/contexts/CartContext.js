import { createContext } from "react";
import { useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storageCart = localStorage.getItem("cart");
    if (!storageCart) {
      localStorage.setItem("cart", []);
      setCart([]);
      return;
    }
    setCart(JSON.parse(storageCart));
  }, []);

  function addToCart(product) {
    const newCart = [...cart, { ...product, quantityInCart: 1 }];
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  }

  function updateQuantity(newQuantity, _id) {
    const newCart = [...cart];
    const indexThisProduct = newCart.findIndex(
      (product) => product._id === _id
    );
    if (newQuantity === 0) {
      newCart.splice(indexThisProduct, 1);
    } else {
      newCart[indexThisProduct].quantityInCart = newQuantity;
    }
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  }

  function resetCart() {
    localStorage.setItem("cart", []);
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        updateQuantity,
        addToCart,
        resetCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
