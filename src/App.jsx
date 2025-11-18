import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/common/NavBar";
import Footer from "./components/common/Footer";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import More from "./pages/More";
import Media from "./pages/Media";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/clothing-stores-near-me" element={<More />} />
        <Route path="/in-the-news" element={<Media />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
