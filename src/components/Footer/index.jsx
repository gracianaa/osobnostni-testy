import './style.css';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="footer">
      <h3 className="footer__heading">Osobnostní testy</h3>
      <div className="footer__links">
        <Link className="link" to="/">
          Výběr testů
        </Link>
        <Link className="link" to="/">
          Osobnost
        </Link>
        <Link className="link" to="/">
          Práce s testy
        </Link>
      </div>
    </footer>
  );
};
