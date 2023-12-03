import { Link } from 'react-router-dom';
import './style.css';

export const Button = ({ children, type, to, onClick }) => {
  const className = `button ${
    type === 'primary' ? 'button--primary' : 'button--secondary'
  }`;

  if (to === undefined) {
    return (
      <button onClick={onClick} className={className}>
        {children}
      </button>
    );
  }

  return (
    <Link onClick={onClick} to={to} className={className}>
      {children}
    </Link>
  );
};
