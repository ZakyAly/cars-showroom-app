"use client"

import React from 'react'
import Image from 'next/image'
import CustomButton from './CustomButton'

const Hero = () => {
  const handleScroll =()=>{}

  return (
    <div className='hero'>
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero-title">
          MC - Find, Buy, or Rent a car - quickly and easily!</h1>
        <p className="hero-subtitle">
          Streamline your car rental experience with our less booking process.
        </p>
        <CustomButton
          title="Explore Cars"
          containerStyles='bg-primary-blue text-white rounded-full mt-10'
          handleClick={handleScroll}
        
        />
      </div>
      <div className="hero-image-container">
        <div className="hero-image">
          <Image src='/hero.png' alt='hero' fill className='object-contain'/>
        </div>
          <div className="hero-image-overlay"></div>
      </div>
    </div>
  )
}

export default Hero