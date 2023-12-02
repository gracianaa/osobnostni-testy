import React, { useEffect, useState } from 'react';
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
import { AnswerList } from '../../components/AnswerList';

export const QuestionsPage = () => {
  const [allAnswersId, setAllAnswersId] = useState([]);
  const [selectedAnswerId, setSelectedAnswerId] = useState(null);

  const test = useOutletContext();
  const questions = test.questions;

  const handleAllAnswersId = () => {
    setAllAnswersId([...allAnswersId, selectedAnswerId]);
  };

  useEffect(() => {
    handleAllAnswersId();
  }, [selectedAnswerId]);

  console.log(allAnswersId);

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
                  <AnswerList
                    key={answer.id}
                    answer={answer}
                    selected={answer.id === selectedAnswerId}
                    onSelect={setSelectedAnswerId}
                  />
                ))}
              </ol>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};
