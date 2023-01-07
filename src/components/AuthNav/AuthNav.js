import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.scss'


export const AuthNav = () => {
  return (
    <div className={css.div}>
      <NavLink
        to="/register"
        exact
        className={css.link}
        // activeStyle={css.activeLink}
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
        exact
        className={css.link}
        // activeStyle={css.activeLink}
      >
        Login
      </NavLink>
    </div>
  );
};
