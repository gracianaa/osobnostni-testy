import './style.css';
import { Button } from '../Button';
import celebrate from './celebrate.png';
import rejection from './missingQuestion.png';
import { useSwiper } from 'swiper/react';

export const EvaluationSlide = ({ test, selectedAnswers }) => {
  const swiper = useSwiper();
  const questions = test.questions;

  const indexById = (array) => {
    const index = {};

    array.forEach((object) => {
      index[object.id] = object;
    });

    return index;
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
  const answeredQuestionCount = Object.keys(selectedAnswers).length;

  let content = null;

  if (questions.length !== answeredQuestionCount) {
    content = (
      <>
        <h3 className="question__title">
          Ups, zdá se že jsi vynechal některou otázku 🙁
        </h3>
        <div className="lastQuestion__image">
          <img src={rejection} alt="rejection image" />
        </div>
        <Button
          onClick={() => {
            swiper.slideTo(2);
          }}
          type={'secondary'}
        >
          Zpět k otázkám
        </Button>
      </>
    );
  } else {
    content = (
      <>
        <h3 className="question__title">
          Gratuluji úspěšně jsi dokončil test!
        </h3>
        <div className="lastQuestion__image">
          <img src={celebrate} alt="celebration image" />
        </div>
        <Button to={`results/${score}`} type={'secondary'}>
          Vyhodnotit
        </Button>
      </>
    );
  }

  return <div className="lastQuestion__container">{content}</div>;
};
