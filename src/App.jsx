import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/common/NavBar";
import Footer from "./components/common/Footer";
import ProductDetails from "./components/ProductDetails/ProductDetails";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-details" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  );
};

export default App;
