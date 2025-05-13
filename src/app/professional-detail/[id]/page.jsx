import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const ProfessionalDetails = async ({params}) => {
  const { id } = await params;
  const res = await fetch(`https://68217315259dad2655af42ce.mockapi.io/api/v1/decorator-org/${id}/`);
  const professional = await res.json();


  return (
    <div className="max-w-5xl mx-auto px-4 py-8 mt-16">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        <img
          src={professional?.bg_img}
          alt={professional?.title}
          className="w-full md:w-1/2 h-80 object-cover"
        />
        <div className="p-6 md:w-1/2">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{professional?.title}</h1>
          <p className="text-gray-600 mb-4">{professional?.country_name} ({professional?.country_code})</p>

          <div className="flex items-center space-x-2 mb-4">
            <span className="text-yellow-500 text-xl">⭐ {professional?.star_rating}</span>
            <span className="text-sm text-gray-500">({professional?.total_no_of_rating} reviews)</span>
          </div>

          <div className="flex items-center space-x-2 mb-4">
            <span className="text-yellow-500 text-xl">{professional?.email}</span>
            <span className="text-sm text-gray-500">({professional?.contact})</span>
          </div>

          <p className="text-xl font-semibold text-green-600 mb-4">${professional?.price}</p>

          {professional?.tags?.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {professional?.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition">
            Book Now
          </button>
        </div>
      </div>
      <Link href="/">
          <button type="button" className="flex  gap-2 bg-pink text-white py-2 px-2 mx-auto mt-6 cursor-pointer">
          <ArrowLeft /> Back to Home
          </button>
      </Link>
    </div>
  );
};

export default ProfessionalDetails;
