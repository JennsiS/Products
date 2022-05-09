/* eslint-disable jsx-a11y/anchor-is-valid */
import {React, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Catalogo.scss'
import prod1 from "../imgs/phone_1.jpg"

export default function Catalogo() {
  const [products, setProducts] = useState([
    { id:0 , nombre: 'phone1', precio: 7000, descripcion: 'Phone 1', img: prod1, categoria:'tecnologia'},
    { id:1 , nombre: 'phone2', precio: 8000, descripcion: 'Phone 2', img: prod1, categoria:'tecnologia'},
  ]);
  return (
    <>
      <div className="catalogo">
        <div id=""></div>
        <div className="card" alt = "prueba">
          <img className="card-img-top" src={products[0].img} alt=""/>
          <div className="card-body">
            <h5 className="card-title">{products[0].nombre}</h5>
            <p className="card-text">{products[0].descripcion}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>      
    </>
  );
}
