/* eslint-disable jsx-a11y/anchor-is-valid */
import {React, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Catalogo.scss'
import { FaCartPlus} from 'react-icons/fa';
import CHeader from './CHeader';
import Card from './ProductCard';

import prod1 from "../imgs/phone_1.jpg"


export default function Catalogo() {
  const [products, setProducts] = useState([
    { id:0 , nombre: 'phone1', precio: 7000, descripcion: 'Phone 1', img: prod1, categoria:'tecnologia'},
    { id:1 , nombre: 'phone2', precio: 8000, descripcion: 'Phone 2', img: prod1, categoria:'tecnologia'},
    { id:2 , nombre: 'phone2', precio: 8000, descripcion: 'Phone 2', img: prod1, categoria:'tecnologia'},
    { id:3 , nombre: 'phone2', precio: 8000, descripcion: 'Phone 2', img: prod1, categoria:'tecnologia'},
    { id:4 , nombre: 'phone2', precio: 8000, descripcion: 'Phone 2', img: prod1, categoria:'tecnologia'},
    { id:5 , nombre: 'phone2', precio: 8000, descripcion: 'Phone 2', img: prod1, categoria:'tecnologia'},
    { id:6 , nombre: 'phone2', precio: 8000, descripcion: 'Phone 2', img: prod1, categoria:'tecnologia'},
    { id:7 , nombre: 'phone2', precio: 8000, descripcion: 'Phone 2', img: prod1, categoria:'tecnologia'},
    { id:8 , nombre: 'phone2', precio: 8000, descripcion: 'Phone 2', img: prod1, categoria:'tecnologia'},
  ]);

  function setCards() {
    const row = [];
    for (let i = 0; i < products.length; i += 1) {
      const id = products[i].id;
      const titulo = products[i].nombre;
      const precio = products[i].precio;
      const img = products[i].img;
      const descripcion = products[i].descripcion;
      row.push(
        <Card id={id} imgSrc={img} titulo={titulo} precio={precio} descripcion={descripcion}/>
      );
    }
    return row;
  }

  return (
    <>
    <CHeader/>
    <div className="catalogo-page">
      <div className="spacer_top"></div>
        <div id="features">
          <div className="card card-wide">
            <h5 className="card-header">Featured</h5>
            <div className="card-body">
              <h5 className="card-title">Peraphone S2</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="btn btn-primary"><FaCartPlus/></a>
            </div>
          </div>
        </div>
        
        <div className="catalogo">
          {setCards()}
        </div>      
      </div>
    </>
  );
}
