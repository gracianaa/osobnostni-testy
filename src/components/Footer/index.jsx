import './style.css';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="footer">
      <h3 className="footer__heading">Osobnostní testy</h3>
      <div className="footer__links">
        <Link className="link" to="/#chooseTest">
          Výběr testů
        </Link>
        <Link className="link" to="/#aboutPersonality">
          Osobnost
        </Link>
        <Link className="link" to="/#howItWorks">
          Práce s testy
        </Link>
        <p className="footer__source">
          Zdroj: Kniha sobnostních testů od Haulwen Nicholas{' '}
        </p>
      </div>
    </footer>
  );
};
