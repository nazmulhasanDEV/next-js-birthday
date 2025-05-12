"use client";
import { useState } from "react";
import { buttonItems } from "@/helpers";


const SidebarFilterButtons = () => {
      const [activeButtons, setActiveButtons] = useState([]);

      const toggleButton = (id) => {
        setActiveButtons((prev) =>
          prev.includes(id) ? prev.filter((btnId) => btnId !== id) : [...prev, id]
        );
      };
    
    return (
        <>
            {/* Left Sidebar with Buttons */}
      <div className="w-full md:w-1/5 px-4">
        {buttonItems.map((item) => (
          <button
            key={item?.id}
            onClick={() => toggleButton(item.id)}
            className={`${activeButtons.includes(item.id) ? "bg-pink text-white" : "bg-white text-pink"} text-pink  px-3 py-2 mb-2 border-pink rounded-md border-1 cursor-pointer hover:bg-purple-300`}
          >
            {item.title}
          </button>
        ))}
        <button
            // onClick={() => toggleButton(item.id)}
            className={`block text-pink  px-3 py-2 mb-2 border-pink rounded-md border-1 cursor-pointer hover:bg-purple-300`}
          >
            More+
          </button>
      </div>
        </>
    );
};

export default SidebarFilterButtons;