import styles from "./ProductList.module.css";
import { CircularProgress } from "@mui/material";
import { Product } from "./Product";
import { useContext, useEffect, useRef } from "react";
import { CartContext } from "./components/Context/CartContext";
import { useState } from "react";
import { Link } from "react-router";

export function ProductList() {
  
  const { products, loading, error } = useContext(CartContext);

  var [filteredProducts, setFilteredProducts] = useState(products);
  
  const searchInput = useRef(null);
 
  function handleClear() {
    searchInput.current.value = "";
  }

useEffect(() => {
  setFilteredProducts(products);
}, [products]);

  return (
    <div className={styles.container}>
      <div className={styles.searchDiv}>
      <input
        type="text"
        ref={searchInput}
        placeholder="Search products..."

        className={styles.searchInput}
        onChange={() => {
            const query = searchInput.current.value.toLowerCase();
            filteredProducts = products.filter(product =>
              product.title.toLowerCase().includes(query)
            );
            setFilteredProducts(filteredProducts);
          }
}

     />
     <button className={styles.searchButton} onClick={handleClear}>CLEAR</button>
     </div>
      <div className={styles.grid}>
        {filteredProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      {loading && (
        <div>
          <CircularProgress
            // size="sm"
            thickness={5}
            style={{ margin: "2rem auto", display: "block" }}
            sx={{
              color: "#001111",
            }}
          />
          <p>Loading products...</p>
        </div>
      )}
      <Link to="/estoque" className={styles.estoqueLink}>
      <button className={styles.estoqueButton}>Estoque</button>
    </Link>
      {error && <p>Error loading products: {error.message}</p>}
    </div>
  );
}
