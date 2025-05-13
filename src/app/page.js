import ProfessionalCard from "@/components/ProfessionalCard";
import FilterTopProfessionals from "@/components/FilterTopProfessionals";
import SidebarFilterButtons from "@/components/SidebarFilter";

const App = async () => {
  const res = await fetch(
    "https://68217315259dad2655af42ce.mockapi.io/api/v1/decorator-org/"
  );
  const professionals = await res.json();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8 mt-15">
        <FilterTopProfessionals />
        <div className="flex flex-col md:flex-row items-start">
          <SidebarFilterButtons />
          <div className="w-full md:w-4/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-4">
            <>
              {professionals?.map((professional, index) => {
                return (
                  <ProfessionalCard
                    key={`index-${index}`}
                    data={professional}
                  />
                );
              })}
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
