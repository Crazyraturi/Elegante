import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

export const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlistItems, setWishlistItems] = useState([]);

  // Helper to get token
  const getToken = () =>
    localStorage.getItem("accessToken") || localStorage.getItem("token");

  // 1. Fetch Wishlist from API on Load
  const fetchWishlist = async () => {
    const token = getToken();
    if (!token) {
      setWishlistItems([]);
      return;
    }

    try {
      const res = await axios.get(
        "http://localhost:8000/api/v1/user/wishlist",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      // Backend returns the wishlist object which contains a 'products' array
      // Adjust based on your exact response structure, usually res.data.products
      if (res.data && res.data.products) {
        setWishlistItems(res.data.products);
      } else if (res.data && res.data.wishlist && res.data.wishlist.products) {
        setWishlistItems(res.data.wishlist.products);
      }
    } catch (error) {
      console.error("Failed to fetch wishlist", error);
    }
  };

  useEffect(() => {
    fetchWishlist();
  }, []);

  // 2. Add to Wishlist
  const addToWishlist = async (product) => {
    const token = getToken();
    if (!token) return alert("Please login first");

    // Optimistic Update: Add to UI immediately
    setWishlistItems((prev) => [...prev, product]);

    try {
      await axios.post(
        "http://localhost:8000/api/v1/user/wishlist",
        { productId: product._id },
        { headers: { Authorization: `Bearer ${token}` } }
      );
    } catch (error) {
      console.error("Add failed", error);
      // If it fails, revert the change by re-fetching
      fetchWishlist();
    }
  };

  // 3. Remove from Wishlist
  const removeFromWishlist = async (productId) => {
    const token = getToken();
    if (!token) return;

    // Optimistic Update: Remove from UI immediately
    setWishlistItems((prev) => prev.filter((item) => item._id !== productId));

    try {
      await axios.delete(
        `http://localhost:8000/api/v1/user/wishlist/${productId}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
    } catch (error) {
      console.error("Remove failed", error);
      fetchWishlist();
    }
  };

  // 4. Check if product is in wishlist
  const isInWishlist = (productId) => {
    return wishlistItems.some((item) => item._id === productId);
  };

  return (
    <WishlistContext.Provider
      value={{ wishlistItems, addToWishlist, removeFromWishlist, isInWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

// Custom hook for easier usage
export const useWishlist = () => useContext(WishlistContext);
