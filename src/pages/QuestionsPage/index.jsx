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
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const test = useOutletContext();
  const questions = test.questions;

  const handleAnswerSelect = (questionId, answerId, value) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: { answerId, value },
    });
  };

  const calculateTotalValue = () => {
    // Získání všech hodnot (values) ze všech odpovědí
    const allValues = Object.values(selectedAnswers);

    // Sečítání hodnot pomocí reduce
    const totalValue = allValues.reduce((sum, answer) => sum + answer.value, 0);

    return totalValue;
  };

  const vysledek = calculateTotalValue();

  console.log(vysledek);

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
                    selected={
                      answer.id === selectedAnswers[question.id]?.answerId
                    }
                    onSelect={() =>
                      handleAnswerSelect(question.id, answer.id, answer.value)
                    }
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
