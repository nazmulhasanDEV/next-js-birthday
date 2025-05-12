"use client";
import { useState } from "react";
import FilterButtons from "./FiilterButton";

const FilterTopProfessionals = () => {
  const [ activeFilter, setActiveFilter ] = useState([]);

    return (
        <>
        <div className="flex flex-col md:flex-row items-center justify-between mb-6">
            <h2 className="text-xl font-bold mb-4 md:mb-0">Top professionals for Birthday Decorations</h2>
            <div className="flex items-center">
                <span className="text-sm mr-2">Sort:</span>
                <button className="flex items-center text-sm border border-gray-300 rounded px-3 py-1">
                    Popular
                    <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </button>
            </div>
        </div>
        <FilterButtons activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
        </>
    );
};

export default FilterTopProfessionals;