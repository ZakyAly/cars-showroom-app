import { CarProps } from "@/types";

export async function fetchCars(){
    const headers = {
            'x-rapidapi-key': '7f3336ea80msh10794ad0384f1f6p11515ajsn41d0772d0257',
            'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'

    }
    const response = await fetch(
        'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla'
        , {headers:headers}
    ) 

    const result = await response.json();
    return result;
}

export const calculateCarRent = (city_mpg:number, year:number)=>{
    const basePricePerDay = 50; // base rental price per day in USD
    const mileageFactor = 0.1 // additional rate per mile driven
    const ageFactor = 0.05 // additional rate per year of vehicle age
    
    //calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    //calculate additional rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate

    return rentalRatePerDay.toFixed(0);
}

export const generateCarImageUrl = (car:CarProps,angel? : string)=>{
    const url = new URL('https://cdn.imagin.studio/getimage');
    
    const {make, year,model}= car;

    url.searchParams.append('customer','hrjavascript-mastery');
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split('')[0]);
    url.searchParams.append('zoomType', "fullscreen");
    url.searchParams.append('modelYear',`${year}`);
    url.searchParams.append('angel', `${angel}`);

    return `${url}`;
}