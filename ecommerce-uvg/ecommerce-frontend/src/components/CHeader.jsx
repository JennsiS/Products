import React from "react"
import "../styles/CHeader.scss"
import logo from "../imgs/logo.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaGripHorizontal, FaShoppingCart, FaStar } from 'react-icons/fa';

export default function CHeader(props) {
    return (
      <header id="catalogo_header">
        <nav className="navver">
          <img id="catalogo_logo" src={logo} alt="" />
          <div id="spacer_div" />
          <ul className="nav_list">
            <button type="button" id="nav_button"> Home </button>
            <button type="button" id="nav_button"> Browse </button>
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Categories
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                <button className="dropdown-item" type="button">Action</button>
                <button className="dropdown-item" type="button">Another action</button>
                <button className="dropdown-item" type="button">Something else here</button>
              </div>
            </div>
          </ul>
          <div className="__bar" />
          <ul className="nav_list">
            <button type="button" id="nav_button"> Contact </button>
          </ul>
          <a href="#ref" className="btn btn-primary iconHeader" id="btn-cart-header"><FaShoppingCart/></a>
          <a href="#ref" className="btn btn-primary iconHeader" id="btn-star-header"><FaStar/></a>
          <a href="#ref" className="btn btn-primary" id="btn-menu-header"><FaGripHorizontal/></a>
        </nav>
      </header>
    );
}
