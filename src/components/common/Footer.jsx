import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";
import { whyChooseUsData } from "../common/whychoosedata"; // Assuming this exists
import { popularCategories } from "../common/Populardata"; // Assuming this exists
import { Instagram, Linkedin, Facebook, Youtube } from "lucide-react";
import { Bell, X, MoreVertical } from "lucide-react";

const Footer = () => {
  const [openWhy, setOpenWhy] = useState(false);
  const [showFull, setShowFull] = useState(false);
  const [openPopular, setOpenPopular] = useState(false);
  const [openBell, setOpenBell] = useState(false);
  const notifications = [
    {
      id: 1,
      title: "The Straticrestedge Fashion For Nation Sale Is LIVE🤩",
      subtitle: "Get FLAT 15% OFF your favorites styles😍",
      code: "FREEDOM15",
      buttonText: "Use code: FREEDOM15",
      timeAgo: "2 days",
    },
    {
      id: 2,
      title: " Straticrestedge KOREAN PANTS Restocked!✨",
      subtitle: "Get yours now at a flat ₹998. 🔥",
      buttonText: "Check Korean Pants Now",
      timeAgo: "2 days",
    },
    {
      id: 3,
      title: "We wish maths was this easy and cool 👇",
      subtitle: "6+ pockets × 100% style = Our cargos at just ₹799!! 🔥",
      buttonText: "Check Cargo Pants Now",
      timeAgo: "3 days",
    },
  ];

  return (
    <footer className="bg-[#212121] w-full text-white py-15">
      {/* --- TOP SECTION — EMAIL SUBSCRIBE (Content Omitted for brevity) --- */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center text-center md:text-left">
        {/* ... email subscription content ... */}
        <div>
          <p>
            Exclusive coupons, extra savings, and tons of EVERYDAY deals
            delivered straight to your inbox.
          </p>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="flex w-[70%] bg-white rounded-lg">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-3 rounded-l-xl placeholder-black bg-white outline-none text-black"
            />
            <button className="px-6 py-2 bg-[#F7E957] m-1.5 rounded-xl font-bold text-black">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* --- BOTTOM FOOTER SECTIONS (Content Omitted for brevity) --- */}
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
              <Link to="/in-the-news">Media</Link>
            </li>
            <li>
              <Link to="/blog"> Straticrestedge Blog</Link>
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
              <Link to="/clothing-stores-near-me">More</Link>
            </li>
          </ul>
        </div>
        {/* LOCATION */}
        <div>
          <h3 className="mb-3">LOCATION</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/contact">support@ Straticrestedge</Link>
            </li>
            <li>
              <Link to="/location">
                First Floor, Unit No. 127, Plot No. A-9, GD ITL Tower, Pitampura
                Flyover U Turn, Netaji Subhash Place, New Delhi, North West
                Delhi, Delhi 110034
              </Link>
            </li>
            

          </ul>
        </div>
      </div>

      {/* --- WHY CHOOSE US (Content Omitted for brevity) --- */}
      <div className="max-w-7xl mx-auto px-6 mt-12 mb-12 border-b border-gray-600 pb-6">
        <button
          onClick={() => {
            setOpenWhy(!openWhy);
            setShowFull(false);
          }}
          className="flex justify-between items-center w-full">
          <h3 className="text-xl font-semibold">WHY CHOOSE US?</h3>
          {openWhy ? (
            <ChevronUp className="w-6 h-6" />
          ) : (
            <ChevronDown className="w-6 h-6" />
          )}
        </button>

        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            openWhy ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"
          }`}>
          {/* Assuming whyChooseUsData has .full and .short properties */}
          <p className="text-gray-300 mt-4">
            {showFull ? whyChooseUsData.full : whyChooseUsData.short}
          </p>

          {openWhy && (
            <button onClick={() => setShowFull(!showFull)} className="mt-3">
              {showFull ? "Read Less-" : "Read More+"}
            </button>
          )}
        </div>
      </div>

      {/* --- POPULAR CATEGORIES (Content Omitted for brevity) --- */}
      <div className="max-w-7xl mx-auto px-6 mt-12 mb-12 border-b border-gray-600 pb-6">
        <button
          onClick={() => setOpenPopular(!openPopular)}
          className="flex justify-between items-center w-full">
          <h3 className="text-xl font-semibold">POPULAR CATEGORIES</h3>
          {openPopular ? (
            <ChevronUp className="w-6 h-6" />
          ) : (
            <ChevronDown className="w-6 h-6" />
          )}
        </button>

        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            openPopular ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"
          }`}>
          {/* Assuming popularCategories is an array of objects with title and items */}
          <div className="text-gray-300 leading-7 whitespace-pre-line mt-4">
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

      {/* --- PAYMENT + SOCIAL SECTION + COPYRIGHT (Content Omitted for brevity) --- */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          {/* LEFT PAYMENT SECTION */}
          <div>
            <h3 className="text-lg font-semibold mb-6">100% SECURE PAYMENT</h3>
            <div className="flex flex-wrap gap-3 items-center">
              <img
                src="https://res.cloudinary.com/dj9tpadhk/image/upload/v1764923498/upi_footer_asjgxl.png"
                alt="UPI"
                className="w-auto h-auto object-contain"
              />
            </div>
          </div>
          {/* RIGHT SOCIAL MEDIA SECTION */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-6">
              Follow Us To See Our Cooler Side
            </h3>
            <div className="flex gap-4 justify-center md:justify-end flex-wrap">
              {/* Social Media Icons (Omitted for brevity) */}
              <a
                href="#"
                className="bg-white text-gray-900 w-12 h-12 rounded flex items-center justify-center hover:bg-gray-200 transition">
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="bg-white text-gray-900 w-12 h-12 rounded flex items-center justify-center hover:bg-gray-200 transition">
                <Linkedin size={24} />
              </a>
              <a
                href="#"
                className="bg-white text-gray-900 w-12 h-12 rounded flex items-center justify-center hover:bg-gray-200 transition">
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="bg-white text-gray-900 w-12 h-12 rounded flex items-center justify-center hover:bg-gray-200 transition">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                className="bg-white text-gray-900 w-12 h-12 rounded flex items-center justify-center hover:bg-gray-200 transition">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                </svg>
              </a>
              <a
                href="#"
                className="bg-white text-gray-900 w-12 h-12 rounded flex items-center justify-center hover:bg-gray-200 transition">
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>
        {/* COPYRIGHT */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm">
            Copyright © 2025 Straticrestedge. All rights reserved.
          </p>
        </div>
      </div>

      {/* --- FLOATING BUTTON --- */}
      <button
        onClick={() => setOpenBell(!openBell)}
        className="fixed bottom-6 right-6 bg-yellow-400 text-gray-900 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-yellow-500 transition z-50">
        {openBell ? <X className="w-7 h-7" /> : <Bell className="w-7 h-7" />}
      </button>

      {/* 🔔 FIXED NOTIFICATION POPUP (Mobile & Desktop) */}
      {openBell && (
        <div
          className="
            fixed bottom-24 right-6 
            w-96 max-w-[90vw] 
            bg-white shadow-xl rounded-lg z-40 
            max-h-[80vh] overflow-y-auto 
            p-0 text-gray-900 
            sm:w-96
            
            /* Mobile-specific adjustments */
            max-sm:bottom-0 
            max-sm:right-0 
            max-sm:w-full 
            max-sm:max-h-full 
            max-sm:rounded-b-none
            max-sm:rounded-t-2xl
          ">
          {/* Sticky Header */}
          <div className="flex items-center justify-between p-5 border-b border-gray-200 sticky top-0 bg-white z-50">
            <h1 className="text-gray-800 font-semibold text-lg">
              Notifications
            </h1>
            {/* The Bell icon is redundant here, let's use the X button for closing on mobile */}
            <button
              onClick={() => setOpenBell(false)}
              className="md:hidden text-gray-400 hover:text-gray-600 p-1">
              <X className="w-6 h-6" />
            </button>
            <Bell className="w-5 h-5 text-gray-600 max-md:hidden" />
          </div>

          {/* Scrollable List */}
          <div className="max-h-110 overflow-y-auto p-4">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className="py-3 border-b last:border-b-0">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-800">
                      {notification.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {notification.subtitle}
                    </p>

                    {/* Use a proper Link or button with an actual action */}
                    <button className="mt-3 bg-yellow-400 hover:bg-yellow-500 text-gray-800 text-sm font-medium px-4 py-2 rounded">
                      {notification.buttonText}
                    </button>
                  </div>

                  <div className="flex flex-col items-end ml-4 min-w-[50px]">
                    <span className="text-xs text-gray-500 mb-2 whitespace-nowrap">
                      {notification.timeAgo}
                    </span>
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
