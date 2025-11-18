import "./styles/theme.css";
import "./styles/global.css";
import { Header } from "./components/Etapa-1/Header";
import { ProductList } from "./components/Etapa-2/ProductList";
import { Cart } from "./components//Etapa-2/Cart";
import { Route, Routes } from "react-router";
import { CartProvider } from "./components/Context/CartContext";
import { ToastContainer } from "react-toastify";
import { Login } from "./components/Etapa-2/Login";
import { User } from "./components/Etapa-2/Usuario";
import { Estoque } from "./components/Etapa-2/Estoque";
import { SessionProvider } from "./components/Context/SessionContext";  

export default function App() {
  return (
    // React Fragment
    <>
      <ToastContainer />
      <SessionProvider>
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signin" element={<Login value="signin" />} />
          <Route path="/register" element={<Login value="register" />} />
          <Route path="/user" element={<User />} />
          <Route path="/estoque" element={<Estoque />} />
        </Routes>
      </CartProvider>
      </SessionProvider>
    </>
  );
}