import styles from "./Product.module.css";
import { handleClick } from "./ProductList";

export function Product({ thumbnail, title, description, price }) {
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
    <div className={styles.productCard}>
      <img src={thumbnail} alt={title} className={styles.productImage} />
      <h2 className={styles.productTitle}>{title}</h2>
      <p className={styles.productDescription}>{description}</p>
      <p className={styles.productPrice}>R$ {price}</p>
      <button className={styles.addToCartButton}onClick={()=>handleClick(product)}>Adicionar ao carrinho</button>
    </div>
  );
}

