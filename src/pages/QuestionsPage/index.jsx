import React, { useState } from 'react';
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
import { EvaluationSlide } from '../../components/EvaluationSlide';

export const QuestionsPage = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const test = useOutletContext();
  const questions = test.questions;

  const handleAnswerSelect = (questionId, answerId) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: answerId,
    });
  };

  return (
    <div className="swiper">
      <Swiper
        effect={'cards'}
        grabCursor={true}
        preventClicks={false}
        preventClicksPropagation={false}
        modules={[EffectCards]}
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
