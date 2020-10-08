import React from "react";

import Loaderer from "react-loader-spinner";

import style from "./Loader.module.scss";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Loader = () => {
  return (
    <Loaderer
      className={style.Loader}
      type="ThreeDots"
      color="#ffc107"
      height={80}
      width={80}
    />
  );
};

export default Loader;
