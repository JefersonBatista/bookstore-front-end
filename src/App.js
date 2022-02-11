import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import { Catalogue, Login, SignUp } from "./pages";

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/" element={<Catalogue />} />
          <Route path="/log-in" element={<Login />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}
