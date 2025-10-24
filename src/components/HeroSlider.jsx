import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import cox from "../assets/images/bazar.jpg";
import sreemangal from "../assets/images/sree.jpg";
import sajek from "../assets/images/Sajek.jpg";
import kuakata from "../assets/images/kata.jpg"
import { Link } from "react-router";

const HeroSlider = () => {
  const slides = [
  { 
    image: cox, 
    title: "Cox's Bazar",
    
  },
  { 
    image: sreemangal, 
    title: "Sreemangal",
    
  },
  { 
    image: sajek, 
    title: "Sajek",
    
  },
  { 
    image: kuakata, 
    title: "Kuakata"
  
  },
]

  return (
    <div className="h-screen w-screen">
      <Swiper
        navigation={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Navigation, Autoplay]}
        loop={true}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-screen w-full bg-center bg-cover flex items-center justify-center bg-opacity-150"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="flex flex-col justify-center gap-5">
                <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
                {slide.title}
              </h1>
              
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
