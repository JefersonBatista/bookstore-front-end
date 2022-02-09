import { BrowserRouter, Routes, Route } from "react-router-dom";
import Catalogue from "./pages/Catalogue/Catalogue";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/" element={<Catalogue />} />
        <Route path="/log-in" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
