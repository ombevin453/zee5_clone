import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "./../styles/carousel.css";

import movie1 from "../assets/movie1.jpg";
import movie2 from "../assets/movie2.jpg";
import movie3 from "../assets/movie3.jpg";
import movie4 from "../assets/movie4.jpg";
import movie5 from "../assets/movie5.jpg";
import movie6 from "../assets/movie6.jpg";
import movie7 from "../assets/movie7.jpg";
import movie8 from "../assets/movie8.jpg";

const items = [
  { id: 1, image: movie1 },
  { id: 2, image: movie2 },
  { id: 3, image: movie3 },
  { id: 4, image: movie4 },
  { id: 5, image: movie5 },
  { id: 6, image: movie6 },
  { id: 7, image: movie7 },
  { id: 8, image: movie8 }
];

const Carousel = () => {
  return (
    <div className="carousel-container">
      <Swiper
        modules={[Navigation, Autoplay, EffectCoverflow]}
        effect="coverflow"
        spaceBetween={3} /* Extremely small space between images */
        slidesPerView={3} /* Default for larger screens */
        centeredSlides={true} /* Ensure the active slide is centered */
        loop={true}
        autoplay={{
          delay: 5000, /* Cycle every 5 seconds */
          disableOnInteraction: false, /* Keep autoplay working even after user interaction */
        }}
        navigation
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 3,
          slideShadows: false,
        }}
        breakpoints={{
          640: { slidesPerView: 2 },  /* For small devices (like mobiles) */
          768: { slidesPerView: 2 },  /* For medium devices (like tablets) */
          1024: { slidesPerView: 3 }, /* For large devices (like tablets & desktops) */
          1280: { slidesPerView: 3 }, /* For larger screens (desktops) */
        }}
        className="swiper-wrapper"
      >
        {items.map((item) => (
          <SwiperSlide key={item.id} className="swiper-slide">
            <img src={item.image} className="carousel-image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
