import { useState } from "react";
import { SlidersHorizontal, ChevronDown } from "lucide-react";

const FilterSidebar = ({ uniqueFilters }) => {
  const [activeSection, setActiveSection] = useState("Color");

  const toggleSection = (id) => {
    setActiveSection(activeSection === id ? null : id);
  };

  return (
    <aside className="w-64 bg-white border border-gray-200 rounded-md shadow-sm font-sans select-none">
      <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-200">
        <SlidersHorizontal size={18} className="text-black" strokeWidth={2.5} />
        <span className="text-lg font-bold text-gray-900">Filter</span>
      </div>

      <div className="divide-y divide-gray-200">
        {uniqueFilters.map((filterGroup) => {
          const isColorGroup = filterGroup.label === "Color";
          const isOpen = activeSection === filterGroup.id;

          return (
            <details key={filterGroup.id} className="group" open={isOpen}>
              <summary
                onClick={(e) => {
                  e.preventDefault();
                  toggleSection(filterGroup.id);
                }}
                className="flex items-center justify-between w-full px-5 py-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden outline-none"
              >
                <span className="font-semibold text-gray-800 text-[15px]">
                  {filterGroup.label}
                </span>
                <ChevronDown
                  size={18}
                  className={`text-gray-500 transition-transform duration-200 ${
                    isOpen ? "-rotate-180" : ""
                  }`}
                />
              </summary>

              <div className="max-h-[300px] overflow-y-auto pr-2 mr-1 ml-5 pb-2">
                <div className="space-y-0">
                  {filterGroup.options.map((option) => (
                    <div
                      key={option}
                      className="flex items-center justify-between py-3 pr-2 border-b border-gray-100 last:border-0"
                    >
                      <label className="flex items-center gap-3 cursor-pointer group/item">
                        <input
                          type="checkbox"
                          name={filterGroup.id}
                          value={option}
                          readOnly
                          className="w-5 h-5 border-2 border-gray-300 rounded text-black focus:ring-0 checked:border-black cursor-pointer transition-colors"
                        />

                        {isColorGroup && (
                          <span
                            className="w-5 h-5 rounded-sm border border-gray-200 shadow-sm"
                            style={{ backgroundColor: option.toLowerCase() }}
                          />
                        )}

                        <span className="text-[15px] text-gray-800 group-hover/item:text-gray-600">
                          {option}
                        </span>
                      </label>

                      <span className="text-sm text-gray-300 font-light">
                        ({Math.floor(Math.random() * 30) + 1})
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </details>
          );
        })}
      </div>
    </aside>
  );
};

export default FilterSidebar;
