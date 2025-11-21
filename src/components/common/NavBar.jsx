import { useState, useContext } from "react";
import { CartContext } from "../../../src/context/CartContext";

import { Search, ShoppingCart, Menu, X, ChevronDown } from "lucide-react";
import Logo from "../icons/Logo";
import { Link } from "react-router-dom";

export default function EcommerceHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartItems } = useContext(CartContext);

  return (
    <div className="w-full sticky top-0 z-50">
      {/* Top Banner */}
      <div className="bg-black text-white text-center py-2 text-sm flex justify-around items-center h-[38px]">
        <div>Free Shipping Sitewide on Every Order, Don't Miss Out!!</div>
        <div className="text-[14px] font-medium">
          <span className="cursor-pointer">LOG IN</span>
          <span> / </span>
          <span className="cursor-pointer">SIGNUP</span>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="shrink-0">
              <h1 className="text-2xl font-bold tracking-tight">
                <Link to="/">
                  <Logo />
                </Link>
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {/* TOPWEAR with dropdown - NEW CODE GOES HERE */}
              <div className="relative group">
                <button className="flex items-center space-x-1 text-black-700 hover:text-gray-900 transition-colors">
                  <span className="text-[14px] font-semibold">TOPWEAR</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {/* Dropdown Menu */}
                <div className="absolute left-0 top-full mt-2 w-[700px] bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-200 ">
                  <div className="grid grid-cols-4 gap-0 p-4">
                    {/* T-shirts Column */}
                    <div>
                      <h3 className="font-bold text-gray-900 mb-3 text-sm">
                        T-shirts
                      </h3>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            to="/men-plain-t-shirts"
                            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                          >
                            Plain T-shirts
                          </Link>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                          >
                            Printed T-shirts
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                          >
                            Regular Fit T-shirts
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                          >
                            Oversized T-shirts
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                          >
                            Polo T-shirts
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                          >
                            Plus Size T-shirts
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                          >
                            Full Sleeve T-shirts
                          </a>
                        </li>
                        <li>
                          <Link
                            to="/t-shirts-for-men"
                            className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-semibold"
                          >
                            View All
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Shirts Column */}
                    <div>
                      <h3 className="font-bold text-gray-900 mb-3 text-sm">
                        Shirts
                      </h3>
                      <ul className="space-y-2">
                        <li>
                          <a
                            href="#"
                            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                          >
                            Plain Shirts
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                          >
                            Oxford Shirts
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                          >
                            Flannel Shirts
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                          >
                            Satin Shirts
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                          >
                            Festive Shirts
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                          >
                            Cotton Shirts
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                          >
                            Shackets
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-semibold"
                          >
                            View All
                          </a>
                        </li>
                      </ul>
                    </div>

                    {/* Polos Column */}
                    <div>
                      <h3 className="font-bold text-gray-900 mb-3 text-sm">
                        Polos
                      </h3>
                      <ul className="space-y-2">
                        <li>
                          <a
                            href="#"
                            className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-semibold"
                          >
                            View All
                          </a>
                        </li>
                      </ul>
                    </div>

                    {/* Shop For Women Column */}
                    <div>
                      <h3 className="font-bold text-gray-900 mb-3 text-sm">
                        Shop For Women
                      </h3>
                      <ul className="space-y-2">
                        <li>
                          <a
                            href="#"
                            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                          >
                            Topwear
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                          >
                            Bottomwear
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-semibold"
                          >
                            View All
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* TOPWEAR with dropdown - NEW CODE GOES HERE */}
              <div className="relative group">
                <button className="flex items-center space-x-1 text-black-700 hover:text-gray-900 transition-colors">
                  <span className="text-[14px] font-semibold">BOTTOMWEAR</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {/* Dropdown Menu */}
                <div className="absolute left-0 top-full mt-2 w-[150px] bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-200">
                  <div className="p-4">
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="#"
                          className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                        >
                          Cargo Joggers
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                        >
                          Cargo Pants
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                        >
                          Trousers
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                        >
                          Japanese Pants
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                        >
                          Gurkha Pants
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                        >
                          Korean Pants
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                        >
                          Pyjamas
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                        >
                          Jeans
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                        >
                          Shorts
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                        >
                          Boxers
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Rest of your nav links */}
              <a href="#" className="text-black-700 text-[14px] font-semibold">
                COMBOS
              </a>

              <a href="#" className="text-black-700 text-[14px] font-semibold">
                NEW ARRIVALS
              </a>

              <Link
                to="/men-winterwear"
                className="text-black-700 text-[14px] font-semibold"
              >
                WINTERWEAR
              </Link>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Search Icon */}
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Search className="w-5 h-5 text-gray-700" />
              </button>

              {/* Cart Icon with Badge */}
              <Link to="/cart">
                <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <ShoppingCart className="w-5 h-5 text-gray-700" />
                  {cartItems.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-yellow-400 text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                      {cartItems.length}
                    </span>
                  )}
                </button>
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-700" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-4 py-4 space-y-3">
              <a
                href="#"
                className="block py-2 text-gray-900 hover:text-gray-900 font-bold"
              >
                TOPWEAR
              </a>
              <a
                href="#"
                className="block py-2 text-gray-700 hover:text-gray-900 font-medium"
              >
                BOTTOMWEAR
              </a>
              <a
                href="#"
                className="block py-2 text-gray-700 hover:text-gray-900 font-medium"
              >
                COMBOS
              </a>
              <a
                href="#"
                className="block py-2 text-gray-700 hover:text-gray-900 font-medium"
              >
                NEW ARRIVALS
              </a>
              <a
                href="#"
                className="block py-2 text-gray-700 hover:text-gray-900 font-medium"
              >
                WINTERWEAR
              </a>
              <div className="pt-3 border-t border-gray-200">
                <a
                  href="#"
                  className="block py-2 text-sm text-gray-700 hover:text-gray-900"
                >
                  LOG IN / SIGNUP
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
