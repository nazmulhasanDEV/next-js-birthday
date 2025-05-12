// pages/professional/[id].js

import { useEffect, useState } from "react";
import { useRouter } from "next/router";  // Import useRouter for dynamic routing

const ProfessionalDetails = () => {
  const router = useRouter();
  const { id } = router.query;  // Get the ID from the URL
  const [professional, setProfessional] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          const res = await fetch(`https://68217315259dad2655af42ce.mockapi.io/api/v1/decorator-org/${id}`);
          if (!res.ok) {
            throw new Error("Failed to fetch data");
          }
          const data = await res.json();
          setProfessional(data);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="professional-details">
      {professional && (
        <div className="professional-info">
          <h1>{professional.title}</h1>
          <p>{professional.country_name}</p>
          <img src={professional.bg_img} alt={professional.title} className="bg-img" />
          <p><strong>Price:</strong> ${professional.price}</p>
          <p><strong>Rating:</strong> {professional.start_rating} ({professional.total_no_of_rating} reviews)</p>
          <div className="tags">
            {professional.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
          <p>{professional.description || "No description available."}</p>
        </div>
      )}
    </div>
  );
};

export default ProfessionalDetails;
