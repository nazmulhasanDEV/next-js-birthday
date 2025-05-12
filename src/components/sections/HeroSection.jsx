"use client";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const cardItems = [
    {
      id: 1,
      bgImage: "/b-1.png",
      title: "Husband’s Birthday Party",
      icon: <ArrowRight className="text-2xl" />,
    },
    {
      id: 2,
      bgImage: "/b-4.png",
      title: "Wife’s Birthday Party",
      icon: <ArrowRight className="text-2xl" />,
    },
    {
      id: 3,
      bgImage: "/b-5.png",
      title: "Kids’s Birthday Party",
      icon: <ArrowRight className="text-2xl" />,
    },
  ];
  return (
    <section className="relative w-full bg-[url('/header-bg.png')] h-[65vh] md:h-[60vh] bg-cover bg-center">
      <div className="bg-purple/40 w-full h-full flex items-center justify-center lg:justify-start xl:pl-[15%]">
        <div className="w-full px-4">
          <h1 className="text-2xl md:text-4xl">
           <span className="text-black">We set up your space to</span>
            <span className="block mt-2.5">
              celebrate your{" "}
              <span className="text-black font-bold mb-6">Birthday Party</span>
            </span>
          </h1>

          <div className="w-full flex gap-4 pt-12 pb-3.5 text-deepBlack font-semibold">
            <div className="flex gap-1.5">
              <img src="/imagesmode.svg" className="w-5 h-5" />
              <h3 className="text-[16px]">Browse gallery</h3>
            </div>

            <div className="flex items-center gap-1.5">
              <img
                src="/search-icon.svg"
                className="w-5 h-5"
                alt="Search Icon"
              />
              <h3 className="whitespace-nowrap text-[16px]">
                Find Inspiration
              </h3>
            </div>

            <div className="flex gap-1.5">
              <img src="/group-icon.svg" className="w-5 h-5" />
              <h3 className="text-[16px]">Hire Professionals</h3>
            </div>
          </div>

          <div>
            <div className="flex items-center rounded-md overflow-hidden w-full max-w-2xl shadow-sm bg-white border-1 border-gray">
              {/* Service Search */}
              <div className="flex items-center px-3 py-2 flex-1 ">
                <input
                  type="text"
                  placeholder="Search Service, Professional etc."
                  className="w-full h-[35px]  outline-none border-none text-md bg-white text-darkGray"
                />
                <img
                  src="/icons/search--icon.svg"
                  alt="Search"
                  className="w-5 h-5 ml-2 text-lightBlack"
                />
              </div>

              {/* Divider */}
              <div className="h-6 w-px bg-gray-300 mx-1" />

              {/* Location Search */}
              <div className="flex items-center px-3 py-2 flex-1 bg-white">
                <input
                  type="text"
                  placeholder="Enter location"
                  className="w-full h-[35px] outline-none border-none text-md  bg-white text-darkGray"
                />
                <img
                  src="/icons/my_location-icon.svg"
                  alt="Location"
                  className="w-5 h-5 ml-2 text-lightBlack"
                />
              </div>
            </div>
            <button className="bg-purple hover:bg-purple text-white font-bold text-sm px-6 py-3 rounded-lg w-full md:w-auto mt-4">
              Search Professionals
            </button>
          </div>
        </div>
      </div>

      {/* Cards Row */}
      <div className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 w-full max-w-6xl px-4 hidden md:block">
        <div className="flex justify-between gap-4">
          {cardItems.map((item) => (
            <div
              key={item.id}
              className={`relative shadow-md rounded-lg p-4 w-full sm:w-80 md:w-96 lg:w-1/3 text-center flex flex-col sm:flex-row items-center gap-3.5 text-white`}
              style={{
                backgroundImage: `url(${item.bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute top-0 left-0 w-full h-full bg-transparentBlue z-0 rounded-lg"></div>
              <div className="relative z-10 w-full flex flex-col sm:flex-row items-center gap-3.5 p-4">
                <h2 className="text-xl sm:text-xl font-semibold mb-2">
                  {item.title}
                </h2>
                <div className="text-2xl">{item.icon}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
