import { Button } from '../../components/Button';
import shareButton from './share.png';
import './style.css';
import { useOutletContext, useParams } from 'react-router-dom';

export const ResultsPage = () => {
  const { score } = useParams();
  const test = useOutletContext();
  const results = test.results;

  let bestResult = null;

  results.forEach((result) => {
    if (score >= result.minScore) {
      if (bestResult === null || result.minScore > bestResult.minScore) {
        bestResult = result;
      }
    }
  });

  return (
    <div className="resultCard">
      <div className="resultCard__content">
        <div className="resultCard__text">
          <h4 className="resultCard__title">{bestResult.result}</h4>
          <p className="resultCard__description">{bestResult.description}</p>
        </div>
        <div className="resultCard__img">
          <img src={bestResult.image} alt={bestResult.image} />
        </div>
      </div>
      <Button type={'secondary'}>
        <div className="buttonShare">
          <div className="buttonShare__image">
            <img src={shareButton} alt="share" />
          </div>
          Sdílet s přáteli
        </div>
      </Button>
    </div>
  );
};
