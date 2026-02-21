import { useState, useContext } from "react";
import { CartContext } from "../../../src/context/CartContext";
import { Link } from "react-router-dom";
import {
  Search,
  ShoppingCart,
  Menu,
  X,
  ChevronDown,
  Package,
  Square,
  Circle,
  Star,
  MoreHorizontal,
  Truck,
  Phone,
  FileText,
  Info,
  HelpCircle,
  RotateCcw,
  Gift,
} from "lucide-react";
import Logo from "../icons/Logo";
import { useAuth } from "../../../src/context/AuthContext";

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
    onClick={onClick}
  >
    {children}
  </Link>
);

// Utility Component: NavLink (for general navigation links like account/login/more links)
const NavLink = ({ to, children, className = "", onClick }) => (
  <Link to={to} className={className} onClick={onClick}>
    {children}
  </Link>
);

// Data Definitions
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

const moreLinks = [
  { name: "Track Order", to: "/track-order", icon: Truck },
  { name: "Contact Us", to: "/contact", icon: Phone },
  { name: "Shipping Policy", to: "/shipping", icon: FileText },
  { name: "About Us", to: "/about", icon: Info },
  { name: "FAQ", to: "/faqs", icon: HelpCircle },
  {
    name: "Returns & Exchange Policy",
    to: "/returns-exchange",
    icon: RotateCcw,
  },
];

// End Data Definitions

export default function EcommerceHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileCategory, setExpandedMobileCategory] = useState(null);
  const [expandedTopwearSubCategory, setExpandedTopwearSubCategory] =
    useState(null);

  const { cartItems } = useContext(CartContext);
  const { isAuthenticated, logout } = useAuth();

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setExpandedMobileCategory(null);
    setExpandedTopwearSubCategory(null);
  };

  const handleLogout = () => {
    logout();
    closeMenu();
  };

  const toggleMobileCategory = (category) => {
    setExpandedMobileCategory(
      expandedMobileCategory === category ? null : category,
    );
    setExpandedTopwearSubCategory(null);
  };

  const toggleTopwearSubCategory = (subCategory) => {
    setExpandedTopwearSubCategory(
      expandedTopwearSubCategory === subCategory ? null : subCategory,
    );
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
            className="hover:underline bg-transparent p-0"
          >
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

  // Function to map category strings to Lucide icons
  const getCategoryIcon = (category) => {
    switch (category) {
      case "Combos":
        return Package;
      case "New Arrivals":
        return Gift;
      case "Winterwear":
        return Star;
      case "Topwear":
        return Square;
      case "Bottomwear":
        return Circle;
      case "More":
        return MoreHorizontal;
      default:
        return null;
    }
  };

  // Generic Mobile Menu Item Component (handles links and expandable sections)
  const MobileMenuItem = ({
    category,
    filterKey,
    filterValue,
    isExpanded,
    toggleHandler,
    icon: Icon,
    children,
  }) => {
    const isActive = expandedMobileCategory === category;
    const isLink = !children;

    if (isLink) {
      return (
        <div className="border-b border-gray-100">
          <MenuLink
            filterKey={filterKey}
            filterValue={filterValue}
            onClick={closeMenu}
            className="flex items-center w-full px-4 py-3 font-medium text-gray-800"
          >
            {Icon && <Icon className="w-5 h-5 mr-3 text-gray-500" />}
            {category}
          </MenuLink>
        </div>
      );
    }

    return (
      <div className="border-b border-gray-100">
        <button
          onClick={() => toggleHandler(category)}
          className={`flex items-center justify-between w-full px-4 py-3 font-medium text-left relative ${
            isActive
              ? "text-yellow-500 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-yellow-500"
              : "text-gray-800"
          }`}
        >
          <span className="flex items-center">
            {Icon && <Icon className="w-5 h-5 mr-3 text-gray-500" />}
            {category}
          </span>
          <ChevronDown
            className={`w-5 h-5 transition-transform ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </button>
        {isExpanded && children}
      </div>
    );
  };

  return (
    <div className="w-full sticky top-0 z-50">
      <div className="bg-black text-white py-2 flex justify-around items-center h-[38px] text-sm">
        <div className="hidden sm:block text-[12px]">
        Free shipping Sitewide on Every Order, Don't Miss Out.
        </div>
        <div className="block sm:hidden text-sm">Education Purpose only</div>
        <TopBannerLinks />
      </div>
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="text-2xl font-bold">
              <Logo />
            </Link>

            {/* DESKTOP NAVIGATION (MEGA-MENU RESTORED) */}
            <nav className="hidden md:flex items-center space-x-8">
              {/* TOPWEAR SECTION - Mega Menu Restored */}
              <div className="relative group">
                <span className="flex items-center text-sm font-semibold cursor-pointer hover:text-gray-600">
                  TOPWEAR
                  <ChevronDown className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform" />
                </span>

                <div className="absolute left-0 mt-2 w-[700px] bg-white shadow-lg rounded-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <div className="grid grid-cols-4 gap-4 p-4">
                    {topwearData.map((col, idx) => (
                      <div key={idx}>
                        <MenuLink
                          filterKey={col.key}
                          filterValue={col.title}
                          className="font-bold mb-3 block text-sm"
                        >
                          {col.title}
                        </MenuLink>

                        <ul className="space-y-2">
                          {col.items.map((item, i) => (
                            <li key={i}>
                              <MenuLink
                                filterKey={"specificType"} // Simplified filter key logic
                                filterValue={item}
                                className="text-sm text-gray-600 hover:text-gray-900"
                              >
                                {item}
                              </MenuLink>
                            </li>
                          ))}
                          <li>
                            <MenuLink
                              filterKey={col.key}
                              filterValue={col.title}
                              className="text-sm text-gray-600 font-semibold"
                            >
                              View All
                            </MenuLink>
                          </li>
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* BOTTOMWEAR SECTION - Mega Menu Restored */}
              <div className="relative group">
                <span className="flex items-center text-sm font-semibold cursor-pointer hover:text-gray-600">
                  BOTTOMWEAR
                  <ChevronDown className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform" />
                </span>
                <div className="absolute left-0 mt-2 w-[180px] bg-white shadow-lg rounded-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <ul className="p-4 space-y-2">
                    {bottomwearTypes.map((type) => (
                      <li key={type}>
                        <MenuLink
                          filterKey="subCategory"
                          filterValue={type}
                          className="text-sm text-gray-600 hover:text-gray-900"
                        >
                          {type}
                        </MenuLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* OTHER LINKS (Simple links) */}
              {["Combos", "New Arrivals", "Winterwear"].map((cat) => (
                <MenuLink
                  key={cat}
                  filterKey="category"
                  filterValue={cat}
                  className="text-sm font-semibold"
                >
                  {cat.toUpperCase()}
                </MenuLink>
              ))}
            </nav>
            {/* END DESKTOP NAVIGATION */}

            <div className="flex items-center space-x-4">
              <Link to="/search" className="p-2 hover:bg-gray-100 rounded-full">
                <Search className="w-5 h-5 text-gray-700" />
              </Link>
              <Link
                to="/cart"
                className="relative p-2 hover:bg-gray-100 rounded-full"
              >
                <ShoppingCart className="w-5 h-5 text-gray-700" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-yellow-400 text-black text-xs font-bold rounded-full h-5 w-5 flex justify-center items-center">
                    {cartItems.length}
                  </span>
                )}
              </Link>
              <button
                className="md:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50 bg-white overflow-y-auto pb-20">
            {/* Image and Close Button Container */}
            <div className="w-full relative">
              <img
                src="https://res.cloudinary.com/dj9tpadhk/image/upload/v1764925737/popupImage_lyb36d.jpg"
                alt="Menu Banner"
                className="w-full h-auto object-cover"
              />
              {/* Close Button positioned absolutely on top of the image */}
              <button
                onClick={closeMenu}
                className="absolute top-2 right-2 p-2 bg-black/30 rounded-full text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="py-4">
              {/* Combos - Direct Link */}
              <MobileMenuItem
                category="Combos"
                icon={getCategoryIcon("Combos")}
                filterKey="category"
                filterValue="Combos"
              />

              {/* New Arrivals */}
              <MobileMenuItem
                category="New Arrivals"
                icon={getCategoryIcon("New Arrivals")}
                filterKey="category"
                filterValue="New Arrivals"
              />

              {/* Winterwear */}
              <MobileMenuItem
                category="Winterwear"
                icon={getCategoryIcon("Winterwear")}
                filterKey="category"
                filterValue="Winterwear"
              />

              {/* Topwear - Custom Logic (Nested Accordion) */}
              <MobileMenuItem
                category="Topwear"
                icon={getCategoryIcon("Topwear")}
                isExpanded={expandedMobileCategory === "Topwear"}
                toggleHandler={toggleMobileCategory}
              >
                <div className="pl-6 bg-gray-50">
                  {topwearData
                    .filter((item) => item.title !== "Shop For Women")
                    .map((col, idx) => {
                      // Logic for Polos: Direct link (no dropdown/chevron)
                      if (col.title === "Polos") {
                        return (
                          <MenuLink
                            key={idx}
                            filterKey={col.key}
                            filterValue={col.items[0]}
                            onClick={closeMenu}
                            className="block py-3 px-4 text-sm font-medium text-gray-700 border-b border-gray-100 last:border-0"
                          >
                            {col.title}
                          </MenuLink>
                        );
                      }

                      // Logic for T-shirts and Shirts: Nested Dropdown
                      return (
                        <div
                          key={idx}
                          className="border-b border-gray-100 last:border-0"
                        >
                          <button
                            onClick={() => toggleTopwearSubCategory(col.title)}
                            className="flex items-center justify-between w-full py-3 px-4 text-sm font-medium text-gray-700 text-left"
                          >
                            {col.title}
                            <ChevronDown
                              className={`w-4 h-4 transition-transform ${
                                expandedTopwearSubCategory === col.title
                                  ? "rotate-180"
                                  : ""
                              }`}
                            />
                          </button>

                          {/* Inner List for T-shirts/Shirts */}
                          {expandedTopwearSubCategory === col.title && (
                            <div className="pl-4 pb-3 space-y-2">
                              {col.items.map((item, i) => (
                                <MenuLink
                                  key={i}
                                  filterKey="specificType"
                                  filterValue={item}
                                  onClick={closeMenu}
                                  className="block py-1 text-sm text-gray-500 hover:text-gray-800"
                                >
                                  {item}
                                </MenuLink>
                              ))}
                              <MenuLink
                                filterKey={col.key}
                                filterValue={col.title}
                                onClick={closeMenu}
                                className="block py-1 text-sm font-semibold text-gray-800"
                              >
                                View All
                              </MenuLink>
                            </div>
                          )}
                        </div>
                      );
                    })}
                </div>
              </MobileMenuItem>

              {/* Bottomwear */}
              <MobileMenuItem
                category="Bottomwear"
                icon={getCategoryIcon("Bottomwear")}
                isExpanded={expandedMobileCategory === "Bottomwear"}
                toggleHandler={toggleMobileCategory}
              >
                <div className="px-8 pb-4 space-y-3 bg-gray-50">
                  <ul className="space-y-2">
                    {bottomwearTypes.map((type, i) => (
                      <li key={i}>
                        <MenuLink
                          filterKey="subCategory"
                          filterValue={type}
                          onClick={closeMenu}
                          className="block text-sm text-gray-600"
                        >
                          {type}
                        </MenuLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </MobileMenuItem>
              {/* MORE FIELD - NEW SECTION */}
              <MobileMenuItem
                category="More"
                icon={getCategoryIcon("More")}
                isExpanded={expandedMobileCategory === "More"}
                toggleHandler={toggleMobileCategory}
              >
                <div className="pl-12 pr-4 pb-4 space-y-3 bg-gray-50">
                  {moreLinks.map((link, index) => {
                    const Icon = link.icon;
                    return (
                      <NavLink
                        key={index}
                        to={link.to}
                        onClick={closeMenu}
                        className="flex items-center py-2 text-sm font-medium text-gray-600 hover:text-gray-800"
                      >
                        <Icon className="w-5 h-5 mr-3 text-gray-500" />
                        {link.name}
                      </NavLink>
                    );
                  })}
                </div>
              </MobileMenuItem>

              {/* Account */}
              <div className="mt-4 pt-4 border-t border-gray-200 px-4">
                {isAuthenticated ? (
                  <>
                    <NavLink
                      to="/my-account"
                      onClick={closeMenu}
                      className="block py-2 font-medium text-gray-800"
                    >
                      MY ACCOUNT
                    </NavLink>

                    <button
                      onClick={handleLogout}
                      className="block w-full text-left py-2 font-medium text-gray-800"
                    >
                      LOGOUT
                    </button>
                  </>
                ) : (
                  <NavLink
                    to="/login"
                    onClick={closeMenu}
                    className="block py-2 font-medium text-gray-800"
                  >
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
