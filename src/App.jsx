import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "../utility";
import MainLayout from "../src/layouts/MainLayout";

import Home from "./pages/Home";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import TrackOrder from "./pages/TrackOrder";
import ReturnOrder from "./pages/ReturnOrder";
import TermsandCondition from "./pages/TermsandCondition";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import ContactUs from "./pages/Contactus";
import FAQpage from "./pages/FAQpage";
import Aboutus from "./pages/Aboutus";
import Collaborations from "./pages/Collaborations";
import More from "./pages/More";
import Media from "./pages/Media";
import CareersPage from "./pages/Career";
import Blog from "./pages/Blog";
import BlogDetailPage from "./pages/BlogDetails";
import CartPage from "./pages/CartPage";
import AddressPage from "./pages/AddressPage";
import PaymentPage from "./pages/PaymentPage";

import ProductListingPage from "../src/components/ProductListing/ProductListingPage";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import Verify from "./auth/Verify";
import Verifyemail from "./auth/VerifyEmail";
import MyAccount from "./pages/MyAccount";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />

          {/* FINAL FIX: This route is now correct */}
          <Route path="/product/:id" element={<ProductDetails />} />

          <Route path="/track-order" element={<TrackOrder />} />
          <Route path="/returns-exchange" element={<ReturnOrder />} />
          <Route path="/terms" element={<TermsandCondition />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/shipping" element={<ShippingPolicy />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/faqs" element={<FAQpage />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/collab" element={<Collaborations />} />
          <Route path="/clothing-stores-near-me" element={<More />} />
          <Route path="/in-the-news" element={<Media />} />
          <Route path="/career" element={<CareersPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/address" element={<AddressPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/verify/:token" element={<Verifyemail />} />

          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/details" element={<BlogDetailPage />} />

          <Route path="/products" element={<ProductListingPage />} />
          <Route path="/my-account" element={<MyAccount />} />

          <Route
            path="/products?specificType=Polo%20T-shirts"
            element={<ProductListingPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
