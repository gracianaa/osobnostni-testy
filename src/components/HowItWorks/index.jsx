import './style.css';

export const HowItWorks = () => {
  return (
    <section className="howItWorks" id="howItWorks">
      <h2 className="howItWorks__heading">Jak pracovat s testy?</h2>
      <div className="howItWorks__container">
        <div className="howItWorks__flex">
          <div className="howItWorks__number">1</div>
          <p className="howItWorks__text">
            U každého testu si nejprve přečti úvod a poté si projdi otázky.
          </p>
        </div>
        <div className="howItWorks__flex">
          <div className="howItWorks__number">2</div>
          <p className="howItWorks__text">
            Pamatuj, že neexistují správné a špatné odpovědi.
          </p>
        </div>
        <div className="howItWorks__flex">
          <div className="howItWorks__number">3</div>
          <p className="howItWorks__text">
            Nad otázkami nepřemýšlej, vyber odpověď, která k tobě nejvíc
            promlouvá.
          </p>
        </div>
      </div>
    </section>
  );
};
