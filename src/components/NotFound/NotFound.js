import React from "react";
import { Link } from "react-router-dom";

import style from "./NotFound.module.scss";

export default function NotFound() {
  return (
    <div className={style.error}>
      <p className={style.codeError}>404</p>
      <p className={style.textError}>
        Page not found. Go to the &nbsp;
        <Link className={style.homePageLink} to="/">
          HOME
        </Link>
        &nbsp; page.
      </p>
    </div>
  );
}
