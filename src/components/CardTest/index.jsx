import { Button } from '../Button';
import './style.css';

export const CardTest = ({ test }) => {
  const numberOfQuestions = test.questions ? test.questions.length : 0;

  return (
    <div className="cardTest">
      <div>
        <h3 className="cardTest__title">{test.title}</h3>
        <p className="cardTest__info">
          {test.minutes} minut | {numberOfQuestions} otázek
        </p>
      </div>

      <div className="cardTest__image">
        <img src={test.img} alt={test.title} />
      </div>
      <Button to={`/test/${test.id}`} type={'secondary'}>
        Spustit test
      </Button>
    </div>
  );
};
