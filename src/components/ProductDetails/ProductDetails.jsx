import { useState } from "react";
import { Heart, ShoppingCart } from "lucide-react";

import FreeShipping from "../../assets/FreeShipping.svg";
import codPincode from "../../assets/codPincode.svg";
import rewardPoints from "../../assets/pdp-stripes_loyalty.jpg";
import snapmint from "../../assets/snap_logo_green.svg";
import offer_pop from "../../assets/offer_pop.svg";
import RecentlyViewed from "./RecentlyViewed";
import SimilarProducts from "./SimilarProducts";
import FeaturesSection from "./FeaturesSection";

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState("Pecan Brown");
  const [selectedSize, setSelectedSize] = useState("L");
  const [quantity, setQuantity] = useState(1);
  const [pincode, setPincode] = useState("");

  const images = [
    "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500",
    "https://images.unsplash.com/photo-1620799139834-6b8f844fbe61?w=500",
    "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=500",
    "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500",
  ];

  const colors = [
    { name: "Off White", code: "#F5F5DC" },
    { name: "Dark Grey", code: "#4A4A4A" },
    { name: "Pecan Brown", code: "#8B4513" },
    { name: "Brown", code: "#654321" },
  ];

  const sizes = ["S", "M", "L", "XL", "XXL"];

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="text-sm text-gray-500">
          HOME / MENS CLOTHING / SWEATSHIRTS FOR MEN / PECAN BROWN ELBOW PATCH
          SWEATSHIRT
        </div>
      </div>

      {/* Main Product Section */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Image Gallery */}
          <div className="flex gap-4">
            {/* Thumbnails */}
            <div className="flex flex-col gap-2">
              {images.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-20 h-24 cursor-pointer ${
                    selectedImage === idx ? "border-black" : "border-gray-200"
                  }`}
                >
                  <img
                    src={img}
                    alt={`View ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 h-100 relative bg-gray-100">
              <button className="absolute top-4 right-4 bg-white rounded-full p-2 shadow">
                <Heart className="w-5 h-5" />
              </button>
              <img
                src={images[selectedImage]}
                alt="Product"
                className="w-full h-100 object-cover"
              />
            </div>
          </div>

          {/* Right: Product Details */}
          <div>
            <h1 className="text-2xl font-semibold mb-2">
              Pecan Brown Elbow Patch Sweatshirt
            </h1>

            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold">₹ 1,999.00</span>
              <span className="text-[18px] text-[#A7A7A7] line-through">
                ₹ 2,999
              </span>
              <span className="bg-[#FEE53D] text-[#49431A] text-xs px-2 py-1 rounded font-bold">
                60% OFF
              </span>
            </div>

            <div className="mt-10 mb-10 p-2 border-2 rounded-xl border-gray-200 bg-[#ECF2FD]">
              <div className="mb-2 pl-2 pr-2 flex items-center justify-between">
                <div className="flex items-baseline-start gap-1">
                  <img src={offer_pop} className="h-[25px] w-[25px]" />
                  <div className="flex flex-col items-end">
                    <span className="font-semibold text-sm">Get at ₹ 1079</span>
                    <svg
                      className="get-of-svg-1"
                      width="34"
                      height="7"
                      viewBox="0 0 34 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.20189 5.43868L0.112161 3.90284L33.9421 2.52873e-05L0.291619 6.97452L0.20189 5.43868Z"
                        fill="url(#paint0_linear_1_206)"
                      ></path>

                      <defs>
                        <linearGradient
                          id="paint0_linear_1_206"
                          x1="-9"
                          y1="3.99866"
                          x2="34.0879"
                          y2="2.49577"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="white" stopOpacity="0.4"></stop>
                          <stop
                            offset="0.5"
                            stopColor="#F1D207"
                            stopOpacity="0.8"
                          ></stop>
                          <stop offset="1" stopColor="#E5C700"></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
                <span className="text-sm">FLAT 10% OFF</span>
              </div>
              <div className="flex justify-between p-2 bg-white rounded-xl">
                <input
                  placeholder="Apply coupon BYNG10"
                  className="focus:outline-none text-sm pl-2 w-60"
                />
                <button className="text-[#2C4F93] font-semibold cursor-pointer">
                  How?
                </button>
              </div>
            </div>

            {/* Color Selection */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm text-[#000000] font-medium">
                  Color:{" "}
                  <span className="text-[#615F5F]">{`(${selectedColor})`}</span>
                </label>
                <a href="#" className="text-sm text-gray-600">
                  Size Guide {">"}
                </a>
              </div>
              <div className="flex gap-2">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-10 h-10 rounded-xl border-2 ${
                      selectedColor === color.name
                        ? "border-black"
                        : "border-gray-300"
                    }`}
                    style={{ backgroundColor: color.code }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-4">
              <label className="text-sm font-medium mb-2 block">Size:</label>
              <div className="flex gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border cursor-pointer ${
                      selectedSize === size
                        ? "border-black bg-black text-white"
                        : "border-gray-300"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <div className="text-sm text-black mt-2">
                Sizes Not Available ?{" "}
                <span className="text-[#00bfa5] cursor-pointer underline font-semibold">
                  Notify Me
                </span>
              </div>
            </div>

            {/* Add to Cart Buttons */}
            <div className="flex gap-2 mb-4">
              <button className="flex-1 bg-[#212121] text-white py-3 font-semibold rounded-lg">
                <ShoppingCart className="inline w-5 h-5 mr-2" />
                ADD TO CART
              </button>
              <button className="flex-1 bg-[#ffdd00] text-[#212121] py-3 font-semibold rounded-lg">
                BUY NOW
              </button>
            </div>

            <div className="p-1 bg-[#F5F5F5] mt-5 mb-5 rounded-l"></div>

            {/* Delivery Check */}
            <div className="p-4 mb-4">
              <div className="font-medium mb-2 text-black">
                Check Delivery Date
              </div>
              <div className="flex">
                {/* Mobile Input */}
                <input
                  type="text"
                  placeholder="Enter Pincode"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  className="px-3 py-2 border rounded-l-xl border-gray-300 focus:outline-none sm:hidden w-52"
                />

                {/* Desktop Input */}
                <input
                  type="text"
                  placeholder="Enter Your city Pincode"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  className="hidden sm:block px-3 py-2 border rounded-l-xl border-gray-300 focus:outline-none w-full"
                />

                <button className="bg-black text-white font-semibold px-6 py-2 rounded-r-xl cursor-pointer">
                  Check
                </button>
              </div>
              <div className="flex items-center gap-2 mt-3 text-sm">
                <img src={FreeShipping} className="h-10 w-10" />
                <span className="text-[#616161]">Free Shipping</span>
              </div>
              <div className="flex items-center gap-2 mt-2 text-sm">
                <img src={codPincode} className="h-10 w-10" />
                <span className="text-[#616161]">
                  Cash On Delivery Available
                </span>
              </div>
            </div>

            {/* Reward Points */}
            <div className="mb-4 flex items-center cursor-pointer h-20 w-full sm:w-full">
              <img
                src={rewardPoints}
                className="h-full w-full object-contain"
              />
            </div>

            <div className="p-1 bg-[#FAFAFA] mt-5 mb-5 rounded-l"></div>

            {/* Offers */}
            <div className="mb-4">
              <div className="font-medium mb-2">Save extra with Offers</div>
              <div className="flex items-center gap-2 border border-[#dadada] rounded-xl p-3">
                <div className="text-2xl">
                  <img src={snapmint} />
                </div>
                <div className="flex-1">
                  <div className="font-medium">SNAPMINT</div>
                  <div className="text-sm text-gray-600">
                    Or Pay ₹400 now, rest later via Beyoung Pay Later
                  </div>
                </div>
                <button className="text-[#28A4A9] text-[10px] border p-1">
                  Buy on EMI{" >"}
                </button>
              </div>
              <a
                href="#"
                className="text-[#28A4A9] text-sm mt-2 flex justify-end"
              >
                More Offers
              </a>
            </div>

            <div className="p-1 bg-[#F5F5F5] mt-5 mb-5 rounded-l"></div>

            {/* Product Details Accordion */}
            <div className="border-t pt-4">
              <div className="mb-3">
                <button className="w-full flex justify-between items-center font-medium">
                  <span>Product Details</span>
                  <span>›</span>
                </button>
              </div>
              <div className="mb-3">
                <button className="w-full flex justify-between items-center font-medium">
                  <span>Specifications</span>
                  <span>›</span>
                </button>
              </div>
              <div className="mb-3">
                <button className="w-full flex justify-between items-center font-medium">
                  <span>Description</span>
                  <span>›</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <FeaturesSection />
        <RecentlyViewed />
        <SimilarProducts />
      </div>
    </div>
  );
}
