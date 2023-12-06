import './style.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { MenuItem } from '../MenuItem';

export const Menu = ({ onToggleMenu, menuOpened }) => {
  const handleClick = () => {
    onToggleMenu(!menuOpened);
  };
  const burgerClass = `burgerBar ${menuOpened ? 'cross' : 'burger'}`;

  return (
    <nav className={menuOpened ? 'menu menu--opened' : 'menu'}>
      <div className="menu__toolBar">
        <NavLink className="menu__logo" to="/#home">
          Osobnostní testy
        </NavLink>
        <div className={'menu__hamburgerIcon'} onClick={handleClick}>
          <span className={burgerClass}></span>
          <span className={burgerClass}></span>
          <span className={burgerClass}></span>
        </div>
        <div
          className={
            menuOpened ? 'menu__items' : 'menu__items menu__items--closed'
          }
        >
          <MenuItem
            onSelect={handleClick}
            id="/#chooseTest"
            text="Výběr testů"
          />
          <MenuItem
            onSelect={handleClick}
            id="/#aboutPersonality"
            text="Osobnost"
          />
          <MenuItem
            onSelect={handleClick}
            id="/#howItWorks"
            text="Práce s testy"
          />
        </div>
      </div>
    </nav>
  );
};
