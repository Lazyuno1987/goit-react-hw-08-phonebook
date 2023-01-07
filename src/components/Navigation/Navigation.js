import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.scss';
import Logo from '../../assets/logo.png'


export const Navigation = () => (
 
  <nav>
    <NavLink
      to="/contacts"
      exact
      className={css.link}
      // activeStyle={css.activeLink}
    >
      <img className={css.logo} src={Logo} alt="logo" />
  
    </NavLink>
  </nav>
);
