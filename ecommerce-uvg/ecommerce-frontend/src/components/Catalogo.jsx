/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Catalogo.scss'
import prod1 from "../imgs/phone_1.jpg"

export default function Catalogo() {
  return (
    <>
      <div className="catalogo">
        <div id=""></div>
        <Button>PROBANDO</Button>
        <div className="card" alt = "prueba">
          <img className="card-img-top" src={prod1} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>      
    </>
  );
}
