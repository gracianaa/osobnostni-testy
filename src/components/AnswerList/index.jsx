import './style.css';
import { useSwiper } from 'swiper/react';

export const AnswerList = ({ answer, selected, onSelect }) => {
  const swiper = useSwiper();

  return (
    <li
      onClick={() => {
        onSelect();
        swiper.slideNext();
      }}
      className={`answers__answer${
        selected ? ' answers__answer--selected' : ''
      }`}
    >
      <p className="answers__text">{answer.answer}</p>
    </li>
  );
};
