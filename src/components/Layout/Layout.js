import React from "react";

import Header from "../Header/Header";

import style from "./Layout.module.scss";

const Layout = ({ children }) => (
  <>
    <Header />
    <div className={style.Layout}>{children}</div>
  </>
);

export default Layout;
