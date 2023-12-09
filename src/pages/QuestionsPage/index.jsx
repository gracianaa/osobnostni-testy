import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './style.css';

// import required modules
import { EffectCards, Pagination, EffectCoverflow } from 'swiper/modules';
import { AnswerList } from '../../components/AnswerList';
import { EvaluationSlide } from '../../components/EvaluationSlide';

export const QuestionsPage = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const data = useOutletContext();
  const test = data[0];

  const questions = test.questions;

  const handleAnswerSelect = (questionId, answerId) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: answerId,
    });
  };
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      if (index < questions.length) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      }
      return '';
    },
  };

  let supportsCards = null;

  if (navigator.userAgent.match(/iPhone/i)) {
    supportsCards = false;
  } else {
    supportsCards = true;
  }

  return (
    <div className="swiper">
      <Swiper
        pagination={pagination}
        effect={supportsCards ? 'cards' : 'coverflow'}
        grabCursor={true}
        preventClicks={false}
        preventClicksPropagation={false}
        modules={
          supportsCards
            ? [EffectCards, Pagination]
            : [EffectCoverflow, Pagination]
        }
        centeredSlides={true}
        slidesPerView={'auto'}
        className="mySwiper"
      >
        {questions.map((question) => (
          <SwiperSlide key={question.id}>
            <h3 className="question__title">{question.question}</h3>
            <ol className="answers">
              {questions[question.id].answers.map((answer) => (
                <AnswerList
                  key={answer.id}
                  answer={answer}
                  onSelect={() => handleAnswerSelect(question.id, answer.id)}
                  questions={questions}
                  selectedAnswers={selectedAnswers}
                  questionId={question.id}
                />
              ))}
            </ol>
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <EvaluationSlide test={test} selectedAnswers={selectedAnswers} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
