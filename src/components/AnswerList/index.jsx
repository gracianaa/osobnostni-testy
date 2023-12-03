import './style.css';
import { useSwiper } from 'swiper/react';
import { findFirstUnansweredIndex } from '../../helpers/findFirstUnansweredIndex';

export const AnswerList = ({
  answer,
  onSelect,
  questions,
  selectedAnswers,
  questionId,
}) => {
  const swiper = useSwiper();
  const firstUnansweredIndex = findFirstUnansweredIndex(questions, {
    ...selectedAnswers,
    [questionId]: answer.id,
  });
  const selected = answer.id === selectedAnswers[questionId];

  return (
    <li
      onClick={() => {
        onSelect();
        if (firstUnansweredIndex === null) {
          swiper.slideNext();
        } else {
          swiper.slideTo(firstUnansweredIndex);
        }
      }}
      className={`answers__answer${
        selected ? ' answers__answer--selected' : ''
      }`}
    >
      <p className="answers__text">{answer.answer}</p>
    </li>
  );
};
