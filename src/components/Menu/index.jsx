import './style.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuItem } from '../MenuItem';

export const Menu = ({ onToggleMenu, menuOpened }) => {
  const handleClick = () => {
    onToggleMenu(!menuOpened);
  };

  return (
    <nav className={menuOpened ? 'menu menu--opened' : 'menu'}>
      <div className="menu__toolBar">
        <Link className="menu__logo" to="/">
          Osobnostní testy
        </Link>

        <button onClick={handleClick} className="menu__btn"></button>
      </div>

      <div
        className={
          menuOpened ? 'menu__draver' : 'menu__draver menu__draver--closed'
        }
      >
        <MenuItem onSelect={handleClick} id="#chooseTest" text="Výběr testů" />
        <MenuItem
          onSelect={handleClick}
          id="#aboutPersonality"
          text="Osobnost"
        />
        <MenuItem
          onSelect={handleClick}
          id="#howItWorks"
          text="Práce s testy"
        />
      </div>
    </nav>
  );
};
