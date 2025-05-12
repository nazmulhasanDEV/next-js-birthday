import Testimonial from "./Testimonial.jsx";

const Testimonials = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
        What Our Customers Are Saying
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <Testimonial 
          image="https://randomuser.me/api/portraits/women/21.jpg"
          name="Sarah Johnson"
        />
        <Testimonial 
          image="https://randomuser.me/api/portraits/women/22.jpg"
          name="Emily Parker"
        />
        <Testimonial 
          image="https://randomuser.me/api/portraits/women/23.jpg"
          name="Jessica Wright"
        />
      </div>
    </div>
  );
};

export default Testimonials;
