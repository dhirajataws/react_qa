import React from 'react';
import style from '../../style/app.css'
import {NavLink} from 'react-router-dom';

export const Header = () => (
  <header className={style.navbar}>
    <nav>
      <NavLink exact to='/'>Home</NavLink>
      <NavLink exact to={{pathname: '/search'}}>Search</NavLink>
    </nav>
  </header>
)