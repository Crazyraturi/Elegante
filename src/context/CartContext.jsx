// /src/context/CartContext.jsx (UPDATED)
import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "sonner";
import { useAuth } from "./AuthContext"; // Use your existing path to AuthContext

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
    const { isAuthenticated } = useAuth();
    const [cartData, setCartData] = useState({ items: [], total: 0 });
    const [loading, setLoading] = useState(false);

    const API_BASE_URL = '/api/v1/user/cart';

    // 1. Fetch Cart on Authentication Change (Login/Logout)
    const fetchCart = async () => {
        if (!isAuthenticated) {
            setCartData({ items: [], total: 0 }); // Clear state on logout
            return;
        }
        setLoading(true);
        try {
            const res = await axios.get(API_BASE_URL);
            setCartData({ 
                items: res.data.cart?.items || [], 
                total: res.data.total || 0 
            });
        } catch (error) {
            console.error("Failed to fetch cart:", error);
        } finally {
            setLoading(false);
        }
    };

    // Trigger fetch on initial load or whenever authentication status changes
    useEffect(() => {
        fetchCart();
    }, [isAuthenticated]); 


    // 2. Add to Cart (API Call)
    const addToCart = async ({ productId, varientId, size, quantity = 1 }) => {
        if (!isAuthenticated) {
            toast.error("Please log in to add items to your Cart.");
            return;
        }
        try {
            const payload = { productId, varientId, size, quantity };
            const res = await axios.post(API_BASE_URL, payload);
            
            // Update state with the entire new cart object returned by the server
            setCartData({ 
                items: res.data.cart.items, 
                total: res.data.total 
            });
            toast.success(res.data.message || "Item added to cart!");
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to add item to cart.");
        }
    };
    
    // 3. Update Item Quantity/Variant (uses the internal item _id)
    const updateCartItem = async (itemId, updates) => {
        if (!isAuthenticated) return;
        
        // Handle quantity zero case as a removal
        if (updates.quantity !== undefined && updates.quantity <= 0) {
            return removeFromCart(itemId);
        }

        try {
            // Optimistic update for quantity (optional but improves UX)
            const originalCart = cartData;
            if (updates.quantity !== undefined) {
                setCartData(prev => ({
                    ...prev,
                    items: prev.items.map(item =>
                        item._id === itemId ? { ...item, quantity: updates.quantity } : item
                    )
                }));
            }
            
            const res = await axios.put(`${API_BASE_URL}/${itemId}`, updates);
            
            // Update state with server's final data
            setCartData({ 
                items: res.data.cart.items, 
                total: res.data.total 
            });
            toast.success(res.data.message || "Cart updated!");
            
        } catch (error) {
            // Revert state on failure
            setCartData(originalCart);
            toast.error(error.response?.data?.message || "Failed to update cart item.");
        }
    };

    // 4. Remove Item from Cart (uses the internal item _id)
    const removeFromCart = async (itemId) => {
        if (!isAuthenticated) return;
        try {
            // Optimistic update
            const originalCart = cartData;
            setCartData(prev => ({
                ...prev,
                items: prev.items.filter(item => item._id !== itemId)
            }));
            
            const res = await axios.delete(`${API_BASE_URL}/${itemId}`);
            
            // Final state update
            setCartData({ 
                items: res.data.cart.items, 
                total: res.data.total 
            });

            toast.info(res.data.message || "Item removed from cart.");
        } catch (error) {
            setCartData(originalCart); // Revert on failure
            toast.error(error.response?.data?.message || "Failed to remove item.");
        }
    };

    return (
        <CartContext.Provider
            value={{
                cartItems: cartData.items,
                cartTotal: cartData.total,
                loading,
                fetchCart, // Export fetch function for use in Login.jsx
                addToCart,
                updateCartItem,
                removeFromCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}