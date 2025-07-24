import { createContext } from "react";


export const CartConctext = createContext(
{
    loading: false,
    error: null,
    clearCart: () => {},
    updateQtyCart: () => {},
    products: [],
    cart: [],
    addToCart: () => {},
    rmToCart: () => {}
);

//Fetching products and managing cart state
export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
     
  var category = "beauty";
  var limit = 12;
  var apiUrl = `https://dummyjson.com/products/category/${category}?limit=${limit}&select=id,thumbnail,title,price,description`;

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [ qty, setQty ] = useState(0);

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
    }, 100);
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
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
      {error && <p>Error loading products: {error.message}</p>}
    </div>

  );

  const context = {
    products: products,
    loading: loading,
    error: error,

    cart: cart ,
    addToCart:addToCart,
    updateQtyCart: updateQtyCart
    clearCart: clearCart,

}
 return ()
}

