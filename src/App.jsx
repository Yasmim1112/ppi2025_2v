import "./styles/theme.css";
import "./styles/global.css";
import { Header} from "./Etapa-1/components/Header";
import { ProductList } from "./Etapa-2/components/ProductList";
import { Cart } from "./Etapa-2/components/Cart";
import { Route, Routes } from "react-router";
import { CartProvider } from "./service/CartContext";

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