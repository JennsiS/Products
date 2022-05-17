import {React, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Catalogo.scss'
import { FaCartPlus} from 'react-icons/fa';
import CHeader from './CHeader';
import Card from './ProductCard';

import prod1 from "../imgs/prod_1.png"
import prod2 from "../imgs/prod_2.png"
import prod3 from "../imgs/prod_3.png"
import prod4 from "../imgs/prod_4.png"



export default function Catalogo() {
  const [products, setProducts] = useState([
    { id:0 , nombre: 'Samsung S5', precio: 300, descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', img: prod1, categoria:'tecnologia'},
    { id:1 , nombre: 'Samsung S4', precio: 250, descripcion: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', img: prod2, categoria:'tecnologia'},
    { id:2 , nombre: 'iPhone SE', precio: 400, descripcion: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', img: prod3, categoria:'tecnologia'},
    { id:3 , nombre: 'iPhone 12', precio: 1000, descripcion: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.', img: prod4, categoria:'tecnologia'},
    { id:4 , nombre: 'test_item', precio: 8000, descripcion: 'test_desc', img: prod1, categoria:'tecnologia'},
    { id:5 , nombre: 'test_item', precio: 8000, descripcion: 'test_desc', img: prod1, categoria:'Comida'},
    { id:6 , nombre: 'test_item', precio: 8000, descripcion: 'test_desc', img: prod1, categoria:'tecnologia'},
    { id:7 , nombre: 'test_item', precio: 8000, descripcion: 'test_desc', img: prod1, categoria:'tecnologia'},
    { id:8 , nombre: 'test_item', precio: 8000, descripcion: 'test_desc', img: prod1, categoria:'tecnologia'},
  ]);

 

  function setCards() {
    const row = [];
    for (let i = 0; i < products.length-1; i += 1) {
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

  const [searchTerm,setSearchTerm] = useState('')
  return (
    <>
    <CHeader/>
    <div className="catalogo-page">
      <div className="spacer_top">
        
      </div>


      <input type="text" placeholder="Search..." onChange={event => {setSearchTerm(event.target.value)}}/>
        {products.filter((val) => {
          if (searchTerm ==""){
            return setCards(val)
          } else if (val.nombre.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
            return val
          }
        }).map((val,key) => {
          return <div> {val.nombre}</div>;
        })}


        <div id="features">
          <div className="card card-wide">
            <h5 className="card-header">Featured</h5>
            <div className="card-body">
              <h5 className="card-title">Peraphone S2</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#ref" className="btn btn-primary"><FaCartPlus/></a>
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
