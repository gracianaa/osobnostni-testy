import { ButtonSecondary } from '../ButtonSecondary';
import './style.css';

export const CardTest = ({ test }) => {
  const numberOfQuestions = test.questions ? test.questions.length : 0;

  return (
    <div className="cardTest">
      <h3 className="cardTest__title">{test.title}</h3>
      <p className="cardTest__info">
        {test.minutes} minut | {numberOfQuestions} otázek
      </p>
      <div className="cardTest__image">
        <img src={test.img} alt={test.title} />
      </div>
      <ButtonSecondary>Spustit test</ButtonSecondary>
    </div>
  );
};
