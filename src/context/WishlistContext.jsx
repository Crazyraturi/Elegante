// /src/context/WishlistContext.jsx (UPDATED)
import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "sonner";
import { useAuth } from "./AuthContext"; // Use your existing path to AuthContext

const WishlistContext = createContext();

export const useWishlist = () => useContext(WishlistContext);

export function WishlistProvider({ children }) {
  const { isAuthenticated } = useAuth();
  // Items will now be stored as an array of product objects/IDs fetched from the backend
  const [wishlistItems, setWishlistItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_BASE_URL = "/api/v1/user/wishlist";

  // 1. Fetch Wishlist on Authentication Change (Login/Logout)
  const fetchWishlist = async () => {
    if (!isAuthenticated) {
      setWishlistItems([]); // Clear state on logout
      return;
    }
    setLoading(true);
    try {
      const res = await axios.get(API_BASE_URL);
      // The backend returns wishlist.items, which contains { productId: { ...productData } }
      // We store the product details for easy UI rendering
      setWishlistItems(res.data.wishlist?.items || []);
    } catch (error) {
      console.error("Failed to fetch wishlist:", error);
      setWishlistItems([]);
    } finally {
      setLoading(false);
    }
  };

  // Trigger fetch on initial load or whenever authentication status changes
  useEffect(() => {
    fetchWishlist();
  }, [isAuthenticated]);

  // 2. Add to Wishlist (API Call)
  const addToWishlist = async (productData) => {
    if (!isAuthenticated) {
      toast.error("Please log in to add items to your Wishlist.");
      return;
    }
    try {
      // Send the product ID to the backend
      const res = await axios.post(API_BASE_URL, {
        productId: productData._id || productData.id,
      });

      // Update state with the entire new wishlist object returned by the server
      setWishlistItems(res.data.wishlist.items);
      toast.success(res.data.message || "Item added to Wishlist!");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to add to Wishlist."
      );
    }
  };

  // 3. Remove from Wishlist (API Call)
  const removeFromWishlist = async (productId) => {
    if (!isAuthenticated) return;
    try {
      // Optimistic Update: Remove from state immediately for faster UX
      setWishlistItems((prev) =>
        prev.filter((item) => item.productId._id.toString() !== productId)
      );

      const res = await axios.delete(`${API_BASE_URL}/${productId}`);

      // State correction: Update with the final state from the server (if necessary)
      setWishlistItems(res.data.wishlist.items);
      toast.info(res.data.message || "Item removed from Wishlist.");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to remove item.");
      fetchWishlist(); // Re-fetch to guarantee state accuracy
    }
  };

  // Helper for components to check if an item is wishlisted
  const isWishlisted = (productId) => {
    return wishlistItems.some(
      (item) =>
        item.productId?._id?.toString() === productId ||
        item.productId?.toString() === productId
    );
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        loading,
        fetchWishlist, // Export fetch function for use in Login.jsx
        addToWishlist,
        removeFromWishlist,
        isWishlisted,
      }}>
      {children}
    </WishlistContext.Provider>
  );
}
