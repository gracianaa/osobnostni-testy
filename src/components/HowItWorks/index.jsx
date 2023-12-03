import './style.css';
import chartCharacter from './chart.png';

export const HowItWorks = () => {
  return (
    <section className="howItWorks" id="howItWorks">
      <h2 className="howItWorks__heading">Jak pracovat s testy?</h2>
      <div className="howItWorks__container">
        <ol className="howItWorks__list">
          <li className="howItWorks__item">
            <p className="howItWorks__text">
              U každého testu si nejprve přečti úvod a poté si projdi otázky.
            </p>
          </li>
          <li className="howItWorks__item">
            <p className="howItWorks__text">
              Pamatuj, že neexistují správné a špatné odpovědi.
            </p>
          </li>
          <li className="howItWorks__item">
            <p className="howItWorks__text">
              Nad otázkami nepřemýšlej, vyber odpověď, která k tobě nejvíc
              promlouvá.
            </p>
          </li>
        </ol>
      </div>
      <div className="howItWorks__img">
        <img src={chartCharacter} alt="Character with a chart" />
      </div>
    </section>
  );
};
