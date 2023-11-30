import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css';

import { EffectCards, Pagination, Navigation } from 'swiper/modules';

export const QuestionsPage = () => {
  return (
    <div className="swiper">
      <Swiper
        // install Swiper modules
        modules={[EffectCards, Navigation]}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        effect="cards"
        spaceBetween={50}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <div className="swiper-wrapper">
          <SwiperSlide>
            <h1>Nadpis1</h1>
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
