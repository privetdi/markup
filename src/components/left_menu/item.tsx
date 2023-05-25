import React from "react";
import Category from "./assets/category.svg";
import Calendar from "./assets/calendar.svg";
import PieChart from "./assets/pie-chart.svg";
import NotificationIcon from "./assets/NotificationIcon.svg";
import Settings from "./assets/settings.svg";
import './assets/item.scss'

function Item() {
  return (
    <div className="menu">
      <div className="menu item">
        <img className="menu svg" src={Category} alt="Catgory" />
        <h1>Dashboard</h1>
      </div>
      <div className="menu item">
        <img className="menu svg" src={Calendar} alt="Catgory" />
        <h1>Schedule Reminder</h1>
      </div>
      <div className="menu item">
        <img className="menu svg" src={PieChart} alt="Catgory" />
        <h1>Reports</h1>
      </div>
      <div className="menu item">
        <img className="menu svg" src={NotificationIcon} alt="Catgory" />
        <h1>Notifications</h1>
      </div>
      <div className="menu item">
        <img className="menu svg" src={Settings} alt="Catgory" />
        <h1>Settings</h1>
      </div>
    </div>
  );
}

export default Item;
