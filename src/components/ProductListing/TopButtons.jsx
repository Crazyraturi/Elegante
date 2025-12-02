import { Link, useLocation } from "react-router-dom";

const TopButtons = ({ buttons }) => {
  if (!buttons || buttons.length === 0) return null;

  const location = useLocation();
  const currentPath = location.pathname + location.search;

  const enableScrolling = buttons.length > 4;

  const containerClasses = `flex ml-3 gap-3 mb-8 ${
    enableScrolling ? "overflow-x-auto whitespace-nowrap py-2" : "flex-wrap"
  }`;

  return (
    <div
      className={containerClasses}
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <style>{`.${
        containerClasses.split(" ")[0]
      }.overflow-x-auto::-webkit-scrollbar { display: none; }`}</style>

      {buttons.map((btn) => {
        const isActive = currentPath.includes(btn.url);

        return (
          <Link
            key={btn.label}
            to={btn.url}
            className={`
              px-6 py-2 text-2xl font-medium rounded-full transition-colors shrink-0
              ${
                isActive
                  ? "bg-black text-yellow-300 border border-black hover:bg-gray-800"
                  : "bg-white text-black border border-gray-300 hover:border-black"
              }
            `}
          >
            {btn.label}
          </Link>
        );
      })}
    </div>
  );
};

export default TopButtons;
