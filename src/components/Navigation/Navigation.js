import React from "react";
import { NavLink } from "react-router-dom";

import routes from "../../routes";

import style from "./Navigation.module.scss";

const Navigation = () => (
  <ul className={style.NavigationMenu}>
    <li className={style.NavigationItem}>
      <NavLink
        exact
        to={routes.home}
        className={style.NavigationLink}
        activeClassName={style.NavigationLinkActive}
      >
        HOME
      </NavLink>
    </li>
    <li className={style.NavigationItem}>
      <NavLink
        to={routes.movies}
        className={style.NavigationLink}
        activeClassName={style.NavigationLinkActive}
      >
        MOVIES
      </NavLink>
    </li>
  </ul>
);

export default Navigation;
