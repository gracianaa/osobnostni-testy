import './style.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuItem } from '../MenuItem';

export const Menu = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const handleClick = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <nav>
      <Link className="menu__logo" to="/">
        Osobnostní testy
      </Link>
      <div className={menuOpened ? 'menu' : 'menu--closed'}>
        <button onClick={handleClick} className="menu__btn"></button>
        <div className="menu__items">
          <MenuItem onSelect={handleClick} text="Výběr testů" />
          <MenuItem onSelect={handleClick} text="Osobnost" />
          <MenuItem onSelect={handleClick} text="Práce s testy" />
        </div>
      </div>
    </nav>
  );
};
