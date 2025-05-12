// @ts-ignore
const FilterButtons = ({ activeFilter, setActiveFilter }) => {
  const filters = [
    'Birthday Special Decors',
    'Candlelight Dinners',
    'Birthday Cakes',
    'Birthday Surprises',
    'Couple Activities',
  ];

  return (
    <div className="w-full px-4 mb-6">
      <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`text-xs sm:text-sm px-4 py-2 cursor-pointer rounded-full transition-all duration-200 ${
              activeFilter === filter
                ? 'bg-pink text-white'
                : 'bg-white text-gray-700 border border-gray-300 hover:border-pink-400 hover:text-pink-500'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterButtons;
