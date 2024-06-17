import Image from "next/image";
import { Hero, SearchBar, CustomerFilter } from "@/components";

export default function Home() {
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
            <CustomerFilter title='fuel'/>
            <CustomerFilter title='year'/>
          </div>
        </div>
      </div>
    </main>
  ); 
}
