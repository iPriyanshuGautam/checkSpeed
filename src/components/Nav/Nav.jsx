import React from "react";
import "./Nav.css";
import logo from "./../../assets/flash.png";

const Nav = () => {
    return (
        <div className="nav-container">
            <div className="nav-left">
                <img className="flash-logo" src={logo} alt="logo" />
                <p className="flash-logo-text">FlashType</p>
            </div>
            <div className="nav-right">
               <p className="nav-title">-ipriyanshu</p>
            </div>
        </div>
    );
};

export default Nav;
