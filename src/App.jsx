import "./styles/theme.css";
import "./styles/global.css";
import { ProductList } from "./components/Etapa-2/ProductList";
import { Product } from "./components/Etapa-2/Product";

export default function App() {

  return (
    // React Fragment
    <>
      <ProductList />
      <Product/>
    </>
  );
}