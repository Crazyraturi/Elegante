import { Link } from "react-router-dom";

const BreadcrumbNav = ({ mainCategory, subCategory }) => (
  <div className="max-w-7xl mx-auto px-4 py-3">
    <div className="text-sm text-gray-500">
      <Link to="/" className="hover:text-black transition">
        HOME
      </Link>
      {mainCategory && (
        <>
          <span className="mx-1">/</span>
          <Link
            to={`/${mainCategory.toLowerCase()}`}
            className="hover:text-black transition"
          >
            {mainCategory.toUpperCase()}
          </Link>
        </>
      )}
      {subCategory && (
        <>
          <span className="mx-1">/</span>
          <span className="font-semibold text-gray-700">
            {subCategory.toUpperCase()}
          </span>
        </>
      )}
    </div>
  </div>
);

export default BreadcrumbNav;
