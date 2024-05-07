import React from "react";
import "./index.css";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="left-navbar">
        <img src={logo} alt="logo" className="logo" />
        <div>
          <h3 className="heading">COMPANY NAME</h3>
          <p className="subheading">YOUR LOGAN GOES HERE</p>
        </div>
      </div>
      <div className="right-navbar">
        <select className="menu">
          <option>Menu</option>
        </select>
        <li>Contact Us</li>
        <button className="share-btn">
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            className="link-icon"
          />
          Share Link
        </button>
      </div>
    </div>
  );
};

export default Navbar;
