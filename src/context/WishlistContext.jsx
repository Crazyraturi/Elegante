import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

export const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlistItems, setWishlistItems] = useState([]);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const getToken = () =>
    localStorage.getItem("accessToken") || localStorage.getItem("token");

  const fetchWishlist = async () => {
    const token = getToken();
    if (!token) {
      setWishlistItems([]);
      return;
    }

    try {
      const res = await axios.get(
        `${backendUrl}/api/v1/user/wishlist`, 
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      
      if (res.data?.wishlist?.items) {
        const products = res.data.wishlist.items
          .map((item) => item.productId)
          .filter((product) => product !== null);
        setWishlistItems(products);
      } else {
        setWishlistItems([]);
      }
    } catch (error) {
      console.error("Failed to fetch wishlist", error);
    }
  };

  useEffect(() => {
    fetchWishlist();
  }, []);

  const addToWishlist = async (product) => {
    const token = getToken();
    if (!token) return alert("Please login first");
    setWishlistItems((prev) => [...prev, product]);

    try {
      await axios.post(
        `${backendUrl}/api/v1/user/wishlist`,
        { productId: product._id || product.id },
        { headers: { Authorization: `Bearer ${token}` } }
      );
    } catch (error) {
      console.error("Add failed", error);
      fetchWishlist();
    }
  };

  const removeFromWishlist = async (productId) => {
    const token = getToken();
    if (!token) return;

    setWishlistItems((prev) => prev.filter((item) => {
        const id = item._id || item.id;
        return id !== productId;
    }));

    try {
      await axios.delete(
        `${backendUrl}/api/v1/user/wishlist/${productId}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
    } catch (error) {
      console.error("Remove failed", error);
      fetchWishlist();
    }
  };

  const isInWishlist = (productId) => {
    if (!productId) return false;
    return wishlistItems.some((item) => {
      const itemId = item._id || item.id;
      return itemId?.toString() === productId.toString();
    });
  };

  return (
    <WishlistContext.Provider
      value={{ wishlistItems, addToWishlist, removeFromWishlist, isInWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export const useWishlist = () => useContext(WishlistContext);