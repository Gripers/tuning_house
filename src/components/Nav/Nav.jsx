import React from "react";
import "../Nav/Nav.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav>
        <div className="nav__container">
          <ul className="navbar">
            <li>
              <Link to="/">
                <img src={logo} alt="Logo" />
              </Link>
            </li>
            <li>
              <Link to="/">TASHQI TYUNING</Link>
            </li>
            <li>
              <Link to="/">SALON TYUNING</Link>
            </li>
            <li>
              <Link to="/">OPTIKA VA YORITISH</Link>
            </li>
            <li>
              <Link to="/">MAHSULOTLAR</Link>
            </li>
            <li>
              <Link to="/">PORTFOLIO</Link>
            </li>
            <li>
              <Link to="/">XIZMATLAR</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
