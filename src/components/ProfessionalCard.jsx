"use client";
import Link from "next/link";
import Image from "next/image";

const ProfessionalCard = ({ key, data }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col justify-between h-full" key={key}>
      {/* Image and Badges */}
      <div className="relative h-48">
        <Image
          src={data?.bg_img}
          alt={data?.title}
          width={500} // or adjust to fit your layout
          height={300} // maintain aspect ratio
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-2 right-2 w-5 h-5 text-white cursor-pointer hover:text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>

        {data?.tags?.map((it, index) => {
          return (
            <span key={`index-${index}`} className="capitalize absolute top-2 left-2 bg-pink-500 text-white text-xs px-2 py-1 rounded-full">
              {it}
            </span>
          );
        })}

        {/* Price */}
        <div className="absolute bottom-2 right-2 bg-purple-700 text-white font-medium text-sm px-3 py-1 rounded-md">
          Rs. {data?.price}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="font-medium text-gray-800">{data?.title}</h3>

          <div className="flex items-center mt-2">
            <img
              src={
                "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              }
              alt={data?.title}
              className="w-8 h-8 rounded-full mr-2"
            />
            <span className="text-sm text-gray-700">{"test"}</span>
          </div>

          <div className="flex items-center mt-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-3 h-3 ${
                    i < data?.star_rating
                      ? "text-yellow-500 fill-yellow-500"
                      : "text-gray-300"
                  }`}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              ))}
            </div>
            <span className="text-xs text-gray-500 ml-1">
              ({data?.total_no_of_rating})
            </span>
          </div>
        </div>

        {/* CTA Button */}
        <Link href={`/professional-detail/${data?.id}`}>
          <button className="w-full mt-4 cursor-pointer bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-md">
            CONTACT NOW
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProfessionalCard;
