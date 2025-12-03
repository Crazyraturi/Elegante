import { useState, useContext } from "react";
import { CartContext } from "../../../src/context/CartContext";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, Menu, X, ChevronDown } from "lucide-react";
import Logo from "../icons/Logo";
import { useAuth } from "../../../src/context/AuthContext";

/* ------------------------------------------------------------------
   REUSABLE COMPONENTS
------------------------------------------------------------------ */

// Generic link wrapper
const MenuLink = ({
  filterKey,
  filterValue,
  children,
  className = "",
  onClick,
}) => (
  <Link
    to={`/products?${filterKey}=${encodeURIComponent(filterValue)}`}
    className={className}
    onClick={onClick}>
    {children}
  </Link>
);

// Static route link
const NavLink = ({ to, children, className = "", onClick }) => (
  <Link to={to} className={className} onClick={onClick}>
    {children}
  </Link>
);

/* ------------------------------------------------------------------
   DROPDOWN DATA (removes repetitive JSX)
------------------------------------------------------------------ */

const topwearData = [
  {
    title: "T-shirts",
    key: "subCategory",
    items: [
      "Plain T-shirts",
      "Printed T-shirts",
      "Regular Fit T-shirts",
      "Oversized T-shirts",
      "Polo T-shirts",
      "Plus Size T-shirts",
      "Full Sleeve T-shirts",
    ],
  },
  {
    title: "Shirts",
    key: "subCategory",
    items: [
      "Plain Shirts",
      "Shackets",
      "Oxford Shirts",
      "Flannel Shirts",
      "Satin Shirts",
      "Festive Shirts",
      "Cotton Shirts",
    ],
  },
  {
    title: "Polos",
    key: "subCategory",
    items: ["Polo T-shirts"],
  },
  {
    title: "Shop For Women",
    key: "gender",
    items: ["Women-Topwear", "Women-Bottomwear"],
  },
];

const bottomwearTypes = [
  "Cargo Joggers",
  "Cargo Pants",
  "Trousers",
  "Japanese Pants",
  "Gurkha Pants",
  "Korean Pants",
  "Pyjamas",
  "Jeans",
  "Shorts",
  "Boxers",
];

/* ------------------------------------------------------------------
   MAIN HEADER COMPONENT
------------------------------------------------------------------ */

export default function EcommerceHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartItems } = useContext(CartContext);
  const { isAuthenticated, logout } = useAuth();

  const closeMenu = () => setMobileMenuOpen(false);

  const handleLogout = () => {
    logout();
    closeMenu();
  };

  const TopBannerLinks = () => (
    <div className="text-[14px] font-medium">
      {isAuthenticated ? (
        <>
          <NavLink to="/my-account" className="hover:underline">
            MY ACCOUNT
          </NavLink>
          <span> / </span>
          <button
            onClick={handleLogout}
            className="hover:underline bg-transparent p-0">
            LOGOUT
          </button>
        </>
      ) : (
        <>
          <NavLink to="/login" className="hover:underline">
            LOG IN
          </NavLink>
          <span> / </span>
          <NavLink to="/signup" className="hover:underline">
            SIGNUP
          </NavLink>
        </>
      )}
    </div>
  );

  /* ------------------------------------------------------------------
      RENDER START
  ------------------------------------------------------------------ */
  return (
    <div className="w-full sticky top-0 z-50">
      {/* Top Banner */}
      <div className="bg-black text-white py-2 flex justify-around items-center h-[38px] text-sm">
        <div>Free Shipping Sitewide on Every Order, Don't Miss Out!!</div>
        <TopBannerLinks />
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold">
              <Logo />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {/* TOPWEAR DROPDOWN */}
              <div className="relative group">
                <MenuLink
                  filterKey="category"
                  filterValue="Topwear"
                  className="flex items-center text-sm font-semibold">
                  TOPWEAR{" "}
                  <ChevronDown className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform" />
                </MenuLink>

                <div className="absolute left-0 mt-2 w-[700px] bg-white shadow-lg rounded-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <div className="grid grid-cols-4 gap-4 p-4">
                    {topwearData.map((col, idx) => (
                      <div key={idx}>
                        <MenuLink
                          filterKey={col.key}
                          filterValue={col.title}
                          className="font-bold mb-3 block text-sm">
                          {col.title}
                        </MenuLink>

                        <ul className="space-y-2">
                          {col.items.map((item, i) => (
                            <li key={i}>
                              <MenuLink
                                filterKey={
                                  col.key === "gender"
                                    ? "subCategory"
                                    : "specificType"
                                }
                                filterValue={item}
                                className="text-sm text-gray-600 hover:text-gray-900">
                                {item}
                              </MenuLink>
                            </li>
                          ))}
                          <li>
                            <MenuLink
                              filterKey={col.key}
                              filterValue={col.title}
                              className="text-sm text-gray-600 font-semibold">
                              View All
                            </MenuLink>
                          </li>
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* BOTTOMWEAR DROPDOWN */}
              <div className="relative group">
                <MenuLink
                  filterKey="category"
                  filterValue="Bottomwear"
                  className="flex items-center text-sm font-semibold">
                  BOTTOMWEAR{" "}
                  <ChevronDown className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform" />
                </MenuLink>

                <div className="absolute left-0 mt-2 w-[180px] bg-white shadow-lg rounded-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <ul className="p-4 space-y-2">
                    {bottomwearTypes.map((type) => (
                      <li key={type}>
                        <MenuLink
                          filterKey="subCategory"
                          filterValue={type}
                          className="text-sm text-gray-600 hover:text-gray-900">
                          {type}
                        </MenuLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* SINGLE LINKS */}
              {["Combos", "New Arrivals", "Winterwear"].map((cat) => (
                <MenuLink
                  key={cat}
                  filterKey="category"
                  filterValue={cat}
                  className="text-sm font-semibold">
                  {cat.toUpperCase()}
                </MenuLink>
              ))}
            </nav>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
              <Link to="/search" className="p-2 hover:bg-gray-100 rounded-full">
                <Search className="w-5 h-5 text-gray-700" />
              </Link>

              <Link
                to="/cart"
                className="relative p-2 hover:bg-gray-100 rounded-full">
                <ShoppingCart className="w-5 h-5 text-gray-700" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-yellow-400 text-black text-xs font-bold rounded-full h-5 w-5 flex justify-center items-center">
                    {cartItems.length}
                  </span>
                )}
              </Link>

              {/* Mobile Toggle */}
              <button
                className="md:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t">
            <div className="px-4 py-4 space-y-3">
              {[
                "Topwear",
                "Bottomwear",
                "Combos",
                "New Arrivals",
                "Winterwear",
              ].map((cat) => (
                <MenuLink
                  key={cat}
                  filterKey="category"
                  filterValue={cat}
                  onClick={closeMenu}
                  className="block py-2 font-medium">
                  {cat.toUpperCase()}
                </MenuLink>
              ))}

              <div className="pt-3 border-t">
                {isAuthenticated ? (
                  <>
                    <NavLink
                      to="/my-account"
                      onClick={closeMenu}
                      className="block py-2 text-sm">
                      MY ACCOUNT
                    </NavLink>

                    <button
                      onClick={handleLogout}
                      className="block w-full text-left py-2 text-sm">
                      LOGOUT
                    </button>
                  </>
                ) : (
                  <NavLink
                    to="/login"
                    onClick={closeMenu}
                    className="block py-2 text-sm">
                    LOG IN / SIGNUP
                  </NavLink>
                )}
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
