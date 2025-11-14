import { useState } from "react";
import { Search, ShoppingCart, Menu, X, ChevronDown } from "lucide-react";
import Logo from "../icons/Logo";
import { Link } from "react-router-dom";

export default function EcommerceHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount] = useState(0);

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
              <div className="relative group">
                <button className="flex items-center space-x-1 text-black-70">
                  <span className="text-[14px] font-semibold">TOPWEAR</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>

              <div className="relative group">
                <button className="flex items-center space-x-1 text-black-700">
                  <span className="text-[14px] font-semibold">BOTTOMWEAR</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>

              <a href="#" className="text-black-700 text-[14px] font-semibold">
                COMBOS
              </a>

              <a href="#" className="text-black-700 text-[14px] font-semibold">
                NEW ARRIVALS
              </a>

              <a href="#" className="text-black-700 text-[14px] font-semibold">
                WINTERWEAR
              </a>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Search Icon */}
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Search className="w-5 h-5 text-gray-700" />
              </button>

              {/* Cart Icon with Badge */}
              <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
                <ShoppingCart className="w-5 h-5 text-gray-700" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-yellow-400 text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

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
                className="block py-2 text-amber-600 hover:text-gray-900 font-bold"
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
