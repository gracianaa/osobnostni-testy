import { Button } from '../Button';
import './style.css';
import ideaMan from './idea.png';

export const AboutPersonality = () => {
  return (
    <section className="aboutPersonality" id="aboutPersonality">
      <div className="aboutPersonality__text">
        <h2 className="aboutPersonality__heading">Co je to osobnost?</h2>
        <p className="aboutPersonality__info">
          Osobnost je pojem, který popisuje různé části lidské povahy. Zabývá se
          lidským chováním, zahrnujícím psychické, emoční, společenské, tělesné
          a duchovní aspekty, přičemž existuje tvrzení, že jedinec může mít i
          skryté vlastnosti, kterým nerozumíme.
        </p>
        <p className="aboutPersonality__infoDesktop">
          Lidské bytosti jsou složitá stvoření, ale do všeho kolem sebe se snaží
          vnést pořádek, včetně toho, že sami definují ostatní. Psychologové se
          neustále snaží lidi definovat a kategorizovat. Otázky, proč se lidé
          chovají odlišně a proč jsme každý jedinečný, jsou předmětem neustálých
          výzkumů. Konkrétně se jedná o porovnání lidí se sklony k patologickému
          chování a lidí bez těchto sklonů. Kde bychom byli bez krimi thrillerů,
          které zkoumají psychologické chování zločinců?
        </p>

        <Button to="/personality" type={'primary'}>
          Zjistit více
        </Button>
      </div>
      <div className="aboutPersonality__img">
        <img src={ideaMan} alt="Man with an idea" />
      </div>
    </section>
  );
};
