import Image from "next/image";
import { Hero, SearchBar, CustomerFilter, CarCard } from "@/components";
import { fetchCars } from "./utils";
import { manufacturers } from "@/constants";

export default async function Home({searchParams}) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || '',
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || '',
    limit: searchParams.limit || 10,
    model: searchParams.model || ''
  })  
  
  const isDataEmpty =!Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero/>
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home-text-container">
          <h1 className="text-4xl font-extrabold">Car Cataloge</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home-filters">
          <SearchBar/>
          <div className="home-filter-container">
            <CustomerFilter 
            title='fuel'
            />
            <CustomerFilter
              title='year'
            />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home-cars-wrapper">
              {allCars?.map((car) => 
                <CarCard 
                  car={car}
                />
              )}
            </div>
          </section>
        ):(
          <div className="home-error-container">
            <h2 className="text-black text-xl font-bold">No Results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}

      </div>
    </main>
  ); 
}
