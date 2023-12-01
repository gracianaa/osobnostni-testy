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
  const questions = test.questions;

  return (
    <div className="swiper">
      <Swiper
        effect={'cards'}
        navigation
        grabCursor={true}
        modules={[EffectCards, Navigation]}
        centeredSlides={true}
        slidesPerView={'auto'}
        className="mySwiper"
      >
        <div>
          {questions.map((question) => (
            <SwiperSlide key={question.id}>
              <h3 className="question__title">{question.question}</h3>
              <ol className="answers">
                {questions[question.id].answers.map((answer) => (
                  <li className="answers__answer" key={answer.id}>
                    <p className="answers__text">{answer.answer}</p>
                  </li>
                ))}
              </ol>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};
