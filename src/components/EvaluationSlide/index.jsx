import './style.css';
import { Link } from 'react-router-dom';
import { Button } from '../Button';
import celebrate from './celebrate.png';

export const EvaluationSlide = ({ test, selectedAnswers }) => {
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
  console.log(answeredQuestionCount);
  console.log(questions.length);

  return (
    <div className="lastQuestion__container">
      <h3 className="question__title">Gratuluji úspěšně jsi dokončil test!</h3>
      <div className="lastQuestion__image">
        <img src={celebrate} alt="celebration image" />
      </div>
      <Link to={`results/${score}`}>
        <Button type={'secondary'}>Vyhodnotit</Button>
      </Link>
    </div>
  );
};
