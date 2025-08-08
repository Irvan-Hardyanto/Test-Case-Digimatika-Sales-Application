import React from "react";
import { Outlet } from "react-router";
import "./sidebar.css";

function CustomSidebar() {
  return (
    <div className="container">
      <aside id="sidebar">
        <input type="checkbox" id="toggler" />
        <label htmlFor="toggler" className="toggle-btn">
          {/* Icon For Sidebar Toggle */}
        </label>
        <ul className="sidebar-nav">{/* Sidebar Navigation Link */}</ul>
        <div className="sidebar-footer">
          <a href="#" className="sidebar-link">
            <i className="fa-solid fa-right-from-bracket"></i>
            <span>Logout</span>
          </a>
        </div>
      </aside>
      <div className="main">
        <div className="content">
          <h1>Sidebar with HTML-CSS-Only</h1>
        </div>
      </div>
    </div>
  );
}

export default CustomSidebar;
