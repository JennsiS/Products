/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../styles/CHeader.scss";
import logo from "../imgs/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaGripHorizontal } from "react-icons/fa";

export default class CHeader extends React.Component {
  render() {
    return (
      <header id="catalogo_header">
        <nav className="navver">
          <img id="catalogo_logo" src={logo} alt="" />
          <div id="spacer_div" />
          <ul className="nav_list">
            <button type="button" id="nav_button">
              {" "}
              Home{" "}
            </button>
            <button type="button" id="nav_button">
              {" "}
              Browse{" "}
            </button>
            <button type="button" id="nav_button">
              {" "}
              Menu{" "}
            </button>
            <button type="button" id="nav_button">
              {" "}
              Products{" "}
            </button>
          </ul>
          <div className="__bar" />
          <ul className="nav_list">
            <button type="button" id="nav_button">
              {" "}
              Contact{" "}
            </button>
          </ul>
          <a href="#" className="btn btn-primary" id="btn-menu">
            <FaGripHorizontal />
          </a>
        </nav>
      </header>
    );
  }
}
