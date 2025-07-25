import "./styles/theme.css";
import "./styles/global.css";
import { Header} from "./components/Etapa-1/Header";
import { ProductList } from "./components/Etapa-2/ProductList";
import { Cart } from "./components/Etapa-2/Cart";
import { Route, Routes } from "react-router";
import { CartProvider } from "./components/service/CartContext";

export default function App() {
  return (
    // React Fragment
    <>
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          {/* Add more routes as needed */}
        </Routes>
      </CartProvider>
    </>
  );
}
