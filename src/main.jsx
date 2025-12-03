import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CartProvider } from "../src/context/CartContext.jsx";
import { Toaster } from "./components/ui/sonner";
import AuthProvider from "./context/AuthContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <AuthProvider>
      <App />
      <Toaster/>
      </AuthProvider>
    </CartProvider>
  </StrictMode>
);
