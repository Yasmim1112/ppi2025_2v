import "./styles/theme.css";
import "./styles/global.css";
import { Header} from "./components/Etapa-1/Header";
import { ProductList } from "./components/Etapa-2/ProductList";
import { Cart } from "./components/Etapa-2/Cart";
import { Route, Routes } from "react-router";
import { CartProvider } from "./components/service/CartContext";
import { TelaDel } from "./components/Etapa-2/Tela-del";
import { TelaDer } from "./components/Etapa-2/Tela-der";
import { Estoque } from "./components/Etapa-2/Estoque";


export default function App() {
  return (
    // React Fragment
    <>
    <ToastContainer />
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<TelaDel />} />
          <Route path="/tela-der" element={<TelaDer />} />
          <Route path="/estoque" element={<Estoque />} />
          <Route path= "/register" element={<Register />} />

          {/* Add more routes as needed */}
        </Routes>
      </CartProvider>
    </>
  );
}
