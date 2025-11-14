import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";
import { whyChooseUsData } from "../common/whychoosedata";
import { popularCategories } from "../common/Populardata";

const Footer = () => {
  const [openWhy, setOpenWhy] = useState(false);
  const [showFull, setShowFull] = useState(false);
  const [openPopular, setOpenPopular] = useState(false);


  return (
    <footer className="bg-[#212121] w-full text-white py-12">
      {/* WHY CHOOSE US — COLLAPSIBLE DROPDOWN */}

      {/* TOP SECTION — EMAIL SUBSCRIBE */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center text-center md:text-left">
        {/* Left Text */}
        <div>
          <p>
            Xclusive coupons, extra savings, and tons of EVERYDAY deals
            delivered straight to your inbox.
          </p>
        </div>

        {/* Email Input */}
        <div className="flex justify-center md:justify-end">
          <div className="flex w-[80%] bg-white rounded-lg">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-3 rounded-l-xl placeholder-black font-bold bg-white outline-none text-black"
            />
            <button className="px-4 py-3 bg-[#F7E957] rounded-r-xl font-bold text-black">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM FOOTER SECTIONS */}
      <div className="max-w-7xl space-x-4 mx-auto px-8 grid md:grid-cols-4 gap-12 mt-16 text-left">
        {/* SUPPORT */}
        <div>
          <h3 className="mb-3">SUPPORT</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/track-order">Track Order</Link>
            </li>
            <li>
              <Link to="/returns-exchange">Returns & Exchange Policy</Link>
            </li>
            <li>
              <Link to="/faqs">FAQ's</Link>
            </li>
            <li>
              <Link to="/terms">Terms and Conditions</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/shipping">Shipping Policy</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="mb-3">COMPANY</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/collab">Collaboration</Link>
            </li>
            <li>
              <Link to="/career">Career</Link>
            </li>
            <li>
              <Link to="/media">Media</Link>
            </li>
            <li>
              <Link to="/beyoungistan">Beyoungistan</Link>
            </li>
            <li>
              <Link to="/blog">Beyoung Blog</Link>
            </li>
            <li>
              <Link to="/sitemap">Sitemap</Link>
            </li>
          </ul>
        </div>

        {/* STORES NEAR ME */}
        <div>
          <h3 className="mb-3">STORES NEAR ME</h3>
          <ul className="space-y-2">
            <li>Udaipur</li>
            <li>Lucknow</li>
            <li>Ahmedabad</li>
            <li>Kota</li>
            <li>Mirzapur</li>
            <li>Bhilwara</li>
            <li>
              <Link to="/store/more">More</Link>
            </li>
          </ul>
        </div>

        {/* LOCATION */}
        <div>
          <h3 className="mb-3">LOCATION</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/contact">support@beyoung.in</Link>
            </li>
            <li>
              <Link to="/location">
                Eklingpura Chouraha, Ahmedabad Main Road (NH 8 - Near Mahadev
                Hotel)
              </Link>
            </li>
            <li>
              <Link to="/location">Udaipur, India - 313002</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* WHY CHOOSE US — COLLAPSIBLE DROPDOWN */}
      <div className="max-w-7xl mx-auto px-6 mt-12 mb-12 border-b border-gray-600 pb-6">
        {/* Button */}
        <button
          onClick={() => {
            setOpenWhy(!openWhy);
            setShowFull(false); // reset to short when opening
          }}
          className="flex justify-between items-center w-full"
        >
          <h3 className="text-xl font-semibold">WHY CHOOSE US?</h3>
          {openWhy ? (
            <ChevronUp className="w-6 h-6" />
          ) : (
            <ChevronDown className="w-6 h-6" />
          )}
        </button>

        {/* Body */}
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            openWhy ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <p className="text-gray-300 leading-7 whitespace-pre-line mt-4">
            {showFull ? whyChooseUsData.full : whyChooseUsData.short}
          </p>

          {/* READ MORE / READ LESS BUTTONS */}
          {openWhy && (
            <button
              onClick={() => setShowFull(!showFull)}
              className="mt-3 "
            >
              {showFull ? "Read Less-" : "Read More+"}
            </button>
          )}
        </div>
      </div>
      <div>
        {/* POPULAR CATEGORIES — COLLAPSIBLE DROPDOWN */}
        <div className="max-w-7xl mx-auto px-6 mt-12 mb-12 border-b border-gray-600 pb-6">
          {/* Button */}
          <button
            onClick={() => setOpenPopular(!openPopular)}
            className="flex justify-between items-center w-full"
          >
            <h3 className="text-xl font-semibold">POPULAR CATEGORIES</h3>
            {openPopular ? (
              <ChevronUp className="w-6 h-6" />
            ) : (
              <ChevronDown className="w-6 h-6" />
            )}
          </button>

          {/* Body */}
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              openPopular ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="text-gray-300 leading-7 whitespace-pre-line mt-4">
              {/* Loop Through Populardata.js */}
              {popularCategories.map((section, index) => (
                <div key={index} className="mb-6">
                  <h4 className="font-bold text-white mb-2">{section.title}</h4>

                  {section.items.map((item, idx) => (
                    <p key={idx} className="mb-2">
                      {item}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
