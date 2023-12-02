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
import { ButtonPrimary } from '../../components/ButtonPrimary';
import { Link } from 'react-router-dom';

export const QuestionsPage = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const test = useOutletContext();
  const questions = test.questions;

  const indexById = (array) => {
    const index = {};

    array.forEach((object) => {
      index[object.id] = object;
    });

    return index;
  };

  const handleAnswerSelect = (questionId, answerId) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: answerId,
    });
  };

  const calculateTotalValue = () => {
    let score = 0;

    const allSelectedQuestionIds = Object.keys(selectedAnswers);
    const indexedQuestions = indexById(questions);

    allSelectedQuestionIds.forEach((questionId) => {
      const selectedAnswerId = selectedAnswers[questionId];
      const answeredQuestion = indexedQuestions[questionId];

      const indexedAnswers = indexById(answeredQuestion.answers);

      const selectedAnswer = indexedAnswers[selectedAnswerId];
      const selectedAnswerValue = selectedAnswer.value;

      score += selectedAnswerValue;
    });

    return score;
  };

  const score = calculateTotalValue();

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
                    selected={answer.id === selectedAnswers[question.id]}
                    onSelect={() => handleAnswerSelect(question.id, answer.id)}
                  />
                ))}
              </ol>
            </SwiperSlide>
          ))}
          <SwiperSlide>
            <h3 className="question__title">Gratuluji!</h3>
            <Link to={`results/${score}`}>
              <ButtonPrimary>Vyhodnotit</ButtonPrimary>
            </Link>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};
