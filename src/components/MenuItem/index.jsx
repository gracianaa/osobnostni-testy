import { NavLink } from 'react-router-dom';
import './style.css';

export const MenuItem = ({ text, onSelect, id }) => {
  const handleClick = () => {
    onSelect();
  };

  return (
    <NavLink to={id} className="menu-item" onClick={handleClick}>
      {text}
    </NavLink>
  );
};
