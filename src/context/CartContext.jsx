import { createContext, useState, useEffect, useContext } from "react"; // Added useContext

// ✅ This fixes the "does not provide an export named CartContext" error
export const CartContext = createContext();

// ✅ This fixes the "does not provide an export named useCart" error
export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cartItems");
    return saved ? JSON.parse(saved) : [];
  });

  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    const total = cartItems.reduce(
      (acc, item) => acc + item.price * (item.quantity || 1),
      0
    );
    setCartTotal(total);
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existingProduct = prev.find((item) => item.id === product.id);
      if (existingProduct) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, qty) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: qty } : item))
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartTotal, // ✅ Now available to PaymentPage
        addToCart,
        removeFromCart,
        updateQuantity,
      }}>
      {children}
    </CartContext.Provider>
  );
}
