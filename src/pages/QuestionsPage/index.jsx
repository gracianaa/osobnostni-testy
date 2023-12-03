import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import celebrate from './celebrate.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { EffectCards, Navigation } from 'swiper/modules';
import { AnswerList } from '../../components/AnswerList';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';

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
        grabCursor={true}
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
                  selected={answer.id === selectedAnswers[question.id]}
                  onSelect={() => handleAnswerSelect(question.id, answer.id)}
                />
              ))}
            </ol>
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <div className="lastQuestion__container">
            <h3 className="question__title">
              Gratuluji úspěšně jsi dokončil test!
            </h3>
            <div className="lastQuestion__image">
              <img src={celebrate} alt="celebration image" />
            </div>
            <Link to={`results/${score}`}>
              <Button type={'secondary'}>Vyhodnotit</Button>
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
