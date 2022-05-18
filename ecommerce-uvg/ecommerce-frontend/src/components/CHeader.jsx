import React from "react"
import "../styles/CHeader.scss"
import logo from "../imgs/logo.png"
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
          </ul>
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Categories
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a className="dropdown-item" href="#f">Action</a></li>
              <li><a className="dropdown-item" href="#f">Another action</a></li>
              <li><a className="dropdown-item" href="#f">Something else here</a></li>
            </ul>
          </div>
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
