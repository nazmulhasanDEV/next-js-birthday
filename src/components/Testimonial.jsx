// @ts-ignore
const Testimonial = ({ image, name }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-center mb-4">
        <img 
          src={image}
          alt={`Profile of ${name}`}
          className="w-12 h-12 rounded-full mr-4 object-cover"
        />
        <div>
          <h3 className="font-semibold text-gray-800">{name}</h3>
          <div className="flex mt-1">
            {[...Array(5)].map((_, i) => (
              <svg 
                key={i} 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 text-yellow-400 fill-current" 
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed">
        "The decorations were absolutely perfect for my daughter's birthday! The team was professional and made the whole process stress-free."
      </p>
    </div>
  );
};

export default Testimonial;
