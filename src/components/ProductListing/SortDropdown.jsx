import { ChevronDown } from "lucide-react";

const SORT_OPTIONS = [
  { label: "Recommended", value: "Recommended" },
  { label: "Newly Launched", value: "Newly Launched" },
  { label: "Trending", value: "Trending" },
  { label: "Price: Low To High", value: "price_asc" },
  { label: "Price: High To Low", value: "price_desc" },
];

const SortDropdown = ({ selectedSort, onSortChange }) => {
  return (
    <div className="flex items-center space-x-2 text-sm">
      <span className="text-gray-600 font-medium hidden">Sort By</span>
      <div className="relative">
        <select
          value={selectedSort}
          onChange={(e) => onSortChange(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 pr-8 text-gray-800 appearance-none focus:outline-none focus:ring-1 focus:ring-black cursor-pointer bg-white"
        >
          {SORT_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown
          size={16}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500"
        />
      </div>
    </div>
  );
};

export default SortDropdown;
