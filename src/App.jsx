import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/common/NavBar";
import Footer from "./components/common/Footer";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import TrackOrder from "./pages/TrackOrder";
import ReturnOrder from "./pages/ReturnOrder";
import TermsandCondition from "./pages/TermsandCondition";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import ContactUs from "./pages/Contactus";
import FAQpage from "./pages/FAQpage";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/track-order" element={<TrackOrder />} />
        <Route path="/returns-exchange" element={<ReturnOrder />} />
        <Route path="/terms" element={<TermsandCondition />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/shipping" element={<ShippingPolicy />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/faqs" element={<FAQpage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
