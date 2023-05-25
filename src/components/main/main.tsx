import React from "react";
import SearchIcon from "./searchIcon.svg";
import weatherIcon from "./weatherIcon.png";

import "./main.scss";

function Main() {
  return (
    <div className="main">
      <div className="main__greetings">
        <h1 className="main__greetings main__greetings_text">
          Welcome back <b>Mathew!</b>
        </h1>
        <div className="main__search">
          <img
            className="main__search search__SearchIcon"
            src={SearchIcon}
            alt="Search"
          />
          <input type="text" className="main__search search__input" />
        </div>
      </div>
      <div className="main__today">
        <img
          src={weatherIcon}
          alt="weatherIcon"
          className="main__today weatherIcon"
        />
        <h1 className="main__today temperature">26°C </h1>
        <h1 className="main__today watherToDay">
          It’s a <b>&thinsp;Sunny Day&thinsp;</b> today!
        </h1>
      </div>
    </div>
  );
}

export default Main;
