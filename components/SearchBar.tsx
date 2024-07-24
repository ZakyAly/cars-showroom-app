"use client"
import React,{useState} from 'react';
import { useRouter } from 'next/navigation';

import {SearchManufacturer}  from './'
import Image from 'next/image';

const SearchButton = ({otherClasses}:{otherClasses:string})=>
(  <button
    type='submit'
    className={`-ml-3 z-10 ${otherClasses}`}
    >
      <Image
        src="/magnifying-glass.svg"
        alt="magnifying glass"
        width={40}
        height={40}
        className='object-contain'
      />
  </button>)

const SearchBar = ({setManufacturer,setModel}) => {
    const [searchManufacturer, setSearchManufacturer] = useState('');
    const [searchModel, setSearchModel] = useState('');
    const router = useRouter()

    const handleSearch =(e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();

      if(searchManufacturer === "" && searchModel === ''){
        return alert ('Please fill in the search bar')
      }

      setModel(searchModel)
      setManufacturer(searchManufacturer)
    }

    
  return (
    <form className='searchbar' onSubmit={handleSearch}>
        <div className="searchbar-item">
            <SearchManufacturer 
            selected={searchManufacturer}
            setSelected={setManufacturer}
            />
            <SearchButton otherClasses='sm:hidden'/>
        </div>
        <div className="searchbar-item">
          <Image
            src='/model-icon.png'
            alt='car model'
            width={25}
            height={25}
            className='absolute w-[20px] h-[20px] ml-4'
          />
          <input
            type="text"
            className="searchbar-input"
            name='model'
            value={searchModel}
            onChange={(e)=> setSearchModel(e.target.value)}
            placeholder='Tiguan'
          />
          <SearchButton otherClasses='sm:hidden'/>
        </div>
          <SearchButton otherClasses='max:hidden'/>

    </form>
  )
}

export default SearchBar