import React from 'react';
import Slider from "react-slick";
import BgImage from "../../images/testimonial.png";

const bgStyle = {
    backgroundImage: `url(${BgImage.src})`,
    backgroundSize: "auto",
    backgroundPosition: "center",
    backgroundRepeat: "repeat",
};

const TestimonialData = [
  {
    id: 1,
    name: "Sahil",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem facilis perspiciatis ullam culpa cupiditate tempore.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Aryan",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem facilis perspiciatis ullam culpa cupiditate tempore.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Aditya",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem facilis perspiciatis ullam culpa cupiditate tempore.",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Sahil",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem facilis perspiciatis ullam culpa cupiditate tempore.",
    img: "https://picsum.photos/103/103",
  },    
];

const Testimonial = () => {
  //slider config
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplaySpeed: 2,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,          
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: true,          
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,         
        },
      },
    ],
  };

  return (
    <div style={bgStyle}>
      <div className='bg-white/80 dark:bg-gray-800/90 py-14 dark:text-white '>
        <div className="container">
          {/* header Section */}
          <div data-aos="fade-up" className='text-center mb-10'>
            <h1 className='text-4xl font-bold '>Testimonials</h1>
          </div>

          {/* Testimonials cards Section */}
          <div data-aos="zoom-in">
            <Slider {...settings}>
              {TestimonialData.map(({ id, name, text, img }) => {
                return (
                  <div key={id} className='my-6'>
                    <div className='flex flex-col gap-6 shadow-lg py-8 px-6 mx-4 rounded-3xl bg-white dark:bg-dark relative'>
                      {/* content Section */}
                      <div className='flex flex-col items-center gap-4'>
                          <p className='text-xs'>{text}</p>
                      </div>
                      {/* image Section */}
                      <div className='flex items-center gap-4'>
                        <img 
                          src={img} 
                          alt={name} 
                          className="rounded-full w-16 h-16" 
                        />
                        <div className='space-y-2'>
                          <h1 className='text-xl font-bold text-black/60 dark:text-primary font-cursive'>
                            {name}
                          </h1>
                          <p className='text-sm font-bold text-black/45 dark:text-white'>
                            Developer
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial