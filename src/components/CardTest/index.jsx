import { ButtonSecondary } from '../ButtonSecondary';
import './style.css';

export const CardTest = ({ test }) => {
  return (
    <div className="cardTest">
      <h3 className="cardTest__title">{test.title}</h3>
      <p className="cardTest__info">
        {test.time} minut | {test.numberOfQuestions} otázek
      </p>
      <div className="cardTest__image">
        <img src={test.img} alt={test.title} />
      </div>
      <ButtonSecondary>Spustit test</ButtonSecondary>
    </div>
  );
};
