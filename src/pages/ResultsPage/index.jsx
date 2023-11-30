import tests from '../../../tests.json';
import { ButtonSecondary } from '../../components/ButtonSecondary';
import shareButton from './share.png';
import './style.css';

export const ResultsPage = () => {
  return (
    <div className="resultCard">
      <h4 className="resultCard__title">{tests[0].results[0].result}</h4>
      <p className="resultCard__description">
        {tests[0].results[0].description}
      </p>
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
