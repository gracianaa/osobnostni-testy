import React, { useRef, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { EffectCards, Navigation } from 'swiper/modules';

export const QuestionsPage = () => {
  const test = useOutletContext();
  return (
    <div className="swiper">
      <Swiper
        effect={'cards'}
        navigation
        grabCursor={true}
        modules={[EffectCards, Navigation]}
        centeredSlides={true}
        slidesPerView={3}
        className="mySwiper"
      >
        <div className="swiper-wrapper">
          <SwiperSlide>
            <h1>{test.title}</h1>
            <h3>Otazka</h3>
            <h3>Otazka</h3>
            <h3>Otazka</h3>
            <h3>Otazka</h3>
            <h3>Otazka</h3>
          </SwiperSlide>
          <SwiperSlide>
            <h1>Nadpis2</h1>
            <h3>Otazka</h3>
            <h3>Otazka</h3>
            <h3>Otazka</h3>
            <h3>Otazka</h3>
            <h3>Otazka</h3>
          </SwiperSlide>
          <SwiperSlide>
            <h1>Nadpis3</h1>
            <h3>Otazka</h3>
            <h3>Otazka</h3>
            <h3>Otazka</h3>
            <h3>Otazka</h3>
            <h3>Otazka</h3>
          </SwiperSlide>
          <SwiperSlide>
            <h1>Nadpis4</h1>
            <h3>Otazka</h3>
            <h3>Otazka</h3>
            <h3>Otazka</h3>
            <h3>Otazka</h3>
            <h3>Otazka</h3>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};
