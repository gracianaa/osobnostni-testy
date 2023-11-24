import { ButtonPrimary } from '../ButtonPrimary';
import './style.css';
import trio from './trio.png';

export const PageIntro = () => {
  return (
    <section className="intro">
      <div className="intro__text">
        <h1 className="intro__heading">Každý z nás je unikát.</h1>
        <h2 className="intro__subHeading">Zjisti v čem vynikáš ty...</h2>
        <ButtonPrimary>Vybrat test</ButtonPrimary>
      </div>
      <div className="intro__image">
        <img src={trio} alt="Trio image" />
      </div>
    </section>
  );
};
