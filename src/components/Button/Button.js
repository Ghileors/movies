import React from "react";
import PropTypes from "prop-types";

import style from "./Button.module.scss";

const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick} type="submit" className={style.SearchFormButton}>
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
