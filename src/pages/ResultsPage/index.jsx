import { ButtonSecondary } from '../../components/ButtonSecondary';
import shareButton from './share.png';
import './style.css';
import { useOutletContext, useParams } from 'react-router-dom';

export const ResultsPage = () => {
  const { score } = useParams();
  const test = useOutletContext();

  console.log(score, test);

  return (
    <div className="resultCard">
      <h4 className="resultCard__title">{test.results[0].result}</h4>
      <p className="resultCard__description">{test.results[0].description}</p>
      <ButtonSecondary>
        <div className="buttonShare">
          <div className="buttonShare__image">
            <img src={shareButton} alt="share" />
          </div>
          Sdílet s přáteli
        </div>
      </ButtonSecondary>
    </div>
  );
};
