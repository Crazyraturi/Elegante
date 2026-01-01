import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { toast } from "sonner";
import { useAuth } from "./AuthContext";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const { isAuthenticated } = useAuth(); 

  const getToken = () => localStorage.getItem("accessToken") || localStorage.getItem("token");

  const fetchCart = async () => {
    const token = getToken();
    if (!token) return;

    try {
      const res = await axios.get("http://localhost:8000/api/v1/user/cart", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.data.success) {
        setCartItems(res.data.cart.items || []);
        const total = res.data.cart.items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        setCartTotal(total);
      }
    } catch (error) {
      console.error("Failed to fetch cart:", error);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchCart();
    } else {
      setCartItems([]); 
    }
  }, [isAuthenticated]);

  const addToCart = async (product) => {
    const token = getToken();
    
    if (!token) {
      toast.warning("Please login to add items to cart");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/user/cart", 
        {
           productId: product.productId,
           varientId: product.id, 
           size: product.size,
           quantity: product.quantity || 1,
           title: product.title,
           image: product.image,
           color: product.color,
           originalPrice: product.originalPrice
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (res.data.success) {
        toast.success("Added to Cart");
        setCartItems(res.data.cart.items);
        const total = res.data.cart.items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        setCartTotal(total);
      }
    } catch (error) {
      console.error("Add to cart error:", error);
      toast.error(error.response?.data?.message || "Failed to add to cart");
    }
  };

  const removeFromCart = async (itemId) => {
    const token = getToken();
    if (!token) return;
    const previousItems = [...cartItems];
    setCartItems(prev => prev.filter(item => item._id !== itemId));

    try {
      await axios.delete(`http://localhost:8000/api/v1/user/cart/${itemId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchCart(); 
      toast.success("Item removed");
    } catch (error) {
      console.error("Remove error:", error);
      setCartItems(previousItems); 
      toast.error("Failed to remove item");
    }
  };

  const updateQuantity = async (itemId, newQuantity) => {
    const token = getToken();
    if (!token || newQuantity < 1) return;
    setCartItems(prev => prev.map(item => 
      item._id === itemId ? { ...item, quantity: newQuantity } : item
    ));

    try {
      await axios.put(
        `http://localhost:8000/api/v1/user/cart/${itemId}`,
        { quantity: newQuantity },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchCart();
    } catch (error) {
      console.error("Update quantity error:", error);
      fetchCart();
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartTotal,
        addToCart,
        removeFromCart,
        updateQuantity,
        fetchCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};