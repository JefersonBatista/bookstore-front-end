import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Catalogue, Login, SignUp } from "./pages";
import Cart from "./pages/Cart/Cart";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/" element={<Catalogue />} />
        <Route path="/log-in" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}
