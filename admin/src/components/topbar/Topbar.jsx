import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">SpeedShop</span>
        </div>
        <div className="topRight">
          <div className="topbarIconsContainer">
            <NotificationsNone/>
          </div>
          <div className="topbarIconsContainer">
            <Language/>
          </div>
          <div className="topbarIconsContainer">
            <Settings/>
          </div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNL_ZnOTpXSvhf1UaK7beHey2BX42U6solRA&usqp=CAU" alt="" className="topAvatar"/>
        </div>
      </div>
    </div>
  );
}