import React from "react";
import style from "./Button.module.scss";

const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick} type="submit" className={style.SearchFormButton}>
      {children}
    </button>
  );
};

export default Button;
