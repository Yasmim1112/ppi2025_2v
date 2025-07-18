import "./styles/theme.css";
import "./styles/global.css";
import { ProductList } from "./components/Etapa-2/ProductList";
import { Header } from "./components/Etapa-1/Header";
import { useState } from "react";
import { Cart } from "./components/Etapa-2/Cart";
import { Route, Routes } from "react-router";

export default function App() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((prevCart) => [...prevCart, product]);
  }

  return (
    // React Fragment
    <>
      <Header cart={cart} />
      <Routes>
        <Route path="/" element={<ProductList addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
        {/* Add more routes as needed */}
      </Routes>
    </>
  );
}