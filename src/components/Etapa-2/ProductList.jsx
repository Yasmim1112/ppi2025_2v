import { useEffect, useState } from "react";
import styles from "./ProductList.module.css";
import { CircularProgress } from "@mui/material";
import { Product } from "./Product";

 

export function ProductList() {
  const category = "fragrances";
  const limit = 10;
  const apiUrl = `https://dummyjson.com/products/category/${category}?limit=${limit}&select=id,thumbnail,title,price,description`;

  function handleClick(product) {
    setCart((prevCart) => [...prevCart, product]);
    console.log("Produto adicionado ao carrinho:", product);
  }
  
 const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);

  function getCartTotal(cart) {
  return cart.reduce((total, product) => total + product.price, 0);
}

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
               onAddToCart={() => handleClick(product)} 
            />
          ))}
      </div>
      <div>
        <h2>Valor total:</h2>
       <p>R$ {getCartTotal(cart).toFixed(2)}</p>
      </div>
    </div>
  );
}







