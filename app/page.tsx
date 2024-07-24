"use client";

import { useEffect, useState } from "react";

import { Hero, SearchBar, CustomFilter, CarCard,ShowMore } from "@/components";
import { fetchCars } from "./utils";
import { 
  manufacturers,
  yearsOfProduction,
  fuels
} from "@/constants";
import Image from "next/image";

export default function Home() {
  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [manufacturer, setManufacturer] = useState('');
  const [model, setModel] = useState('');
  const [fuel, setFuel] = useState('');
  const [year, setYear] = useState(2022);
  const [limit, setLimit] = useState(10);

  
  const getCars = async () => {
    setLoading(true)
    try {
      const result = await fetchCars({
        manufacturer: manufacturer || '',
        year: year || 2022,
        fuel: fuel || '',
        limit: limit || 10,
        model: model || ''
      })  
      setAllCars(result)
    } catch (error) {
      console.log(error);
    } finally{
      setLoading(false)
    }
  }
  
  useEffect(() => {
    console.log(fuel,year, limit, manufacturer, model);
    getCars();
    }, [fuel, year, limit, manufacturer, model]);
  
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
          <SearchBar
            setManufacturer={setManufacturer}
            setModel={setModel}
          />
          <div className="home-filter-container">
            <CustomFilter 
              title='fuel'
              options={fuels}
              setFilter={setFuel}
            />
            <CustomFilter
              title='year'
              options={yearsOfProduction}
              setFilter={setYear}
            />
          </div>
        </div>

        {allCars.length > 0  ? (
          <section>
            <div className="home-cars-wrapper">
              {allCars?.map((car) => 
                <CarCard 
                  car={car}
                />
              )}
            </div>
            {loading && (
              <div className="mt-16 w-full flex-center">
                <Image
                  src='/loader.svg'
                  alt='loader'
                  width={50}
                  height={50}
                  className='object-contain'
                />
              </div>
            )}
            <ShowMore
              pageNumber={(limit ) / 10}
              isNext ={limit > allCars.length}
              setLimit={setLimit}
            />
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


