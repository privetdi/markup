import React from "react";
import Item from "./item";
import Logo from "./logo";
import './layout.scss';

function Layout() {
  return (
    <div className="left layout">
      <Logo />
      <h1 className="left_menu menuText">Menu</h1>
      <Item />
    </div>
  );
}

export default Layout;