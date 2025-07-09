import { useEffect, useState } from "react";
import styles from "./ProductList.module.css";
import { CircularProgress } from "@mui/material";
import { Product } from "./Product";

export function handleClick(product) {
    setCart([...cart, product]);
    console.log("Produto adicionado ao carrinho:", product);
}

export function ProductList() {
  const category = "fragrances";
  const limit = 10;
  const apiUrl = `https://dummyjson.com/products/category/${category}?limit=${limit}&select=id,thumbnail,title,price,description`;

 const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    setTimeout(() => {
      fetchProducts();
    }, 2000);
  }, []);

  return (
    <div className={styles.container}>
      <h1>TRJ Megastore</h1>

      {loading && (
        <div>
          <CircularProgress
            thickness={5}
            style={{ margin: "2rem auto", display: "block" }}
            sx={{ color: "#001111" }}
          />
          <p>Loading products...</p>
        </div>
      )}

      {error && <p>Error loading products: {error.message}</p>}

      <div className={styles.productsGrid}>
        {products
          .filter(product => product && product.thumbnail && product.title && product.price)
          .map(product => (
            <Product
              key={product.id}
              thumbnail={product.thumbnail}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          ))}
      </div>
      <div>
        <h2>Carrinho</h2>
        <p>{cart }</p>
      </div>
    </div>
  );
}






