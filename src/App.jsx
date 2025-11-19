import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import PlainTShirt from "./components/topwear/PlainTShirt";


const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route  element={<MainLayout/>} />
        <Route path="/" element={<Home />} />
        <Route path="/product-details" element={<ProductDetails />} />
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
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/blogdetails" element={<BlogDetailPage />} />
        <Route path="/men-plain-t-shirts" element={<PlainTShirt />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
