import React from 'react';
import yellowCab from "../../images/yellow-cab.png";
import bgCity from '../../images/city.jpg';
import Image from 'next/image';

const bgStyle = {
    backgroundImage: `url(${bgCity.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "520px",
    width: "100vw",
};

const Hero = () => {
  return (
    <div style={bgStyle}>
        <div className="dark:bg-black/60 bg-white/80 backdrop-blur-sm dark:text-white duration-300 h-[520px] flex">
            <div className="container grid grid-cols-1 place-items-center">
                {/* text content section */}
                <div className='text-center space-y-5 py-14'>
                  <p 
                    data-aos= "fade-up"
                    className='text-primary text-3xl font-semibold uppercase'
                  >
                    Book Cab Now
                  </p>
                  <h1 
                    data-aos="fade-up"
                    data-aos-delay="600"
                    className='text-4xl md:text-6xl font-bold'
                  >
                    +91 97845 25415
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-delay="1000"
                    className='tracking-[8px] text-base sm:text-xl font-semibold'
                  >
                    www.RideIt.com
                  </p>
                </div>
                {/* Image section */}
                <div data-aos="zoom-in-right" data-aos-duration="1000">
                  <Image 
                    src={yellowCab} 
                    alt='yellow cab' 
                    className='max-h-[460px] sm:scale-125
                    translate-y-10 sm:translate-y-0'
                  />
                </div>
            </div>
        </div>
    </div>
  )
};

export default Hero