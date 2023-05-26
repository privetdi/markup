import React from "react";
import "./consumptionScale.scss";
import lineTop from "./assets/Vector 24.svg";
import lineBotton from "./assets/Vector 25.svg";
import circle80 from "./assets/Ellipse 68.svg";

function ConsumptionScale(props: {
  circleDown: string;
  circleTop: string;
  classNameColor: string;
  ml: number;
  text: string;
}) {
  return (
    <div className="consumptionScale">
      <div className="circleIntake">
        <img
          className="circleIntake circleIntake__circleDown"
          src={props.circleDown}
          alt="circle"
        />
        <img
          className="circleIntake circleIntake__circleTop"
          src={props.circleTop}
          alt="circle"
        />
        <h1 className="procent">80%</h1>
      </div>
      <div className="consumptionScale__text">
        <h1 className="consumptionScale__text-period">Daily Intake</h1>
        <h1 className="consumptionScale__text-ml">5000 ml</h1>
      </div>
      <img src={lineTop} alt="line" className="lines lines-top" />
      <img src={lineBotton} alt="line" className="lines lines-bottom" />
    </div>
  );
}

export default ConsumptionScale;
