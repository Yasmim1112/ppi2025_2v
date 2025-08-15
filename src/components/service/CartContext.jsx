import { useState, useEffect, createContext } from "react";

export const CartContext = createContext({
  // Products and loading/error states
  products: [],
  loading: false,
  error: null,
  // Cart management functions
  cart: [],
  addToCart: () => {},
  updateQtyCart: () => {},
  clearCart: () => {},

  addProduct: () => {}, 
  removeProduct: () => {},
  registeredEmails: null,
  addEmail: () => {},
  registeredPasswords: null,
  addPassword: () => {},
  registerUser: () => {}, 
  validateUser: () => {},

});


export function CartProvider({ children }) {
  // Fetch products from the API
  var category = "beauty";
  var limit = 12;
  var apiUrl = `https://dummyjson.com/products/category/${category}?limit=${limit}&select=id,thumbnail,title,price,description`;

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [registeredEmails, setRegisteredEmails] = useState([]);
  const [registeredPasswords, setRegisteredPasswords] = useState([]);




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

  // Cart state management
  const [cart, setCart] = useState([]);

  const registerUser = (email, password) => {
    setRegisteredEmails(prev => [...prev, email]);
    setRegisteredPasswords(prev => [...prev, password]);
  };

  const validateUser = (email, password) => {
    const idx = registeredEmails.indexOf(email);
    return idx !== -1 && registeredPasswords[idx] === password;
  };

  const addProduct = (product) => {
    setProducts((prev) => [...prev, { ...product, id: Date.now() }]);
  };

  const removeProduct = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  function addToCart(product) {
    // Check if the product is already in the cart
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      // If it exists, update the quantity
      updateQtyCart(product.id, existingProduct.quantity + 1);
    } else {
      setCart((prevCart) => [...prevCart, {...product, quantity: 1}]);
    }
  }

  function updateQtyCart(productId, quantity) {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: quantity } : item
      )
    );
  }

  function clearCart() {
    setCart([]);
  }

  const context = {
    //Products and loading/error states
    products: products,
    loading: loading,
    error: error,
    //Cart management functions
    cart: cart,
    addToCart: addToCart,
    updateQtyCart: updateQtyCart,
    clearCart: clearCart,

    addProduct,
    removeProduct,
    registerUser,
    validateUser,
    registeredEmails: "",
    registeredPasswords: "",
  };

  return (
    <CartContext.Provider value={context}>
      {children}
    </CartContext.Provider>
  );
}