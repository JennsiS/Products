import {React, useState} from "react";
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
    { id:"0" , nombre: 'Samsung S5', precio: 300, descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.', img: prod1, categoria:'tecnologia'},
    { id:"1" , nombre: 'Samsung S4', precio: 250, descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.', img: prod2, categoria:'Phones'},
    { id:"2" , nombre: 'iPhone SE', precio: 400, descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.', img: prod3, categoria:'Phones'},
    { id:"3" , nombre: 'iPhone 12', precio: 1000, descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.', img: prod4, categoria:'tecnologia'},
    { id:"4" , nombre: 'test_item', precio: 8000, descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.', img: prod1, categoria:'Phones'},
    { id:"5" , nombre: 'test_item', precio: 8000, descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.', img: prod1, categoria:'Phones'},
    { id:"6" , nombre: 'test_item', precio: 8000, descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.', img: prod1, categoria:'tecnologia'},
    { id:"7" , nombre: 'test_item', precio: 8000, descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.', img: prod1, categoria:'tecnologia'},
    { id:"8" , nombre: 'test_item', precio: 8000, descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.', img: prod1, categoria:'tecnologia'},
  ]);
  const [listCategories, updateCategories] = useState(["All","Laptops","Phones","tecnologia"]);
  const [displayProducts, updateDisplayProducts] = useState([...products]);

  const [search,setSearch] = useState('');

 function setCategories(){
   const item = [];
   for (let i=0; i<listCategories.length; i+=1){
    item.push(
      <li>
        <a className="dropdown-item" href="#f" onClick={ 
          function() {
             if (listCategories[i]==="All"){
               let category = products;
               updateDisplayProducts([...category]);
             }else{
               let category = products.filter(products => products.categoria === listCategories[i])
               updateDisplayProducts([...category])
             }
            }
          }>{listCategories[i]}</a>
      </li>
    );
   }
   return item;
 }

  function setCards() {
    const row = [];
    for (let i = 0; i < displayProducts.length-1; i += 1) {
      const id = displayProducts[i].id;
      const titulo = displayProducts[i].nombre;
      const precio = displayProducts[i].precio;
      const img = displayProducts[i].img;
      const descripcion = displayProducts[i].descripcion;
      row.push(
        
        <Card id={id} imgSrc={img} titulo={titulo} precio={precio} descripcion={descripcion}/>
      );
    }
    return row;
  }


  function setCardsBySearch(){
    const row = [];
    products.map((item) => {
      if (search !== '' && item.nombre.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
        row.push(<Card id={item.id} imgSrc={item.img} titulo={item.nombre} precio={item.precio} descripcion={item.descripcion}/>)
      }
      else if (search === '') row.push(<Card id={item.id} imgSrc={item.img} titulo={item.nombre} precio={item.precio} descripcion={item.descripcion}/>)
    })
    return row;
  }

  const searchFilterFunction = (text) => {
    setSearch(text);
  }

  function printfunction (){
    if (search === ''){
      return setCards()
    }else {
      return setCardsBySearch()
    }
  }
  
  return (
    <>
    <CHeader/>
    <div className="catalogo-page">
      <div className="spacer_top">
      </div>

      <div id="gridded_div">
        <div className="class_left">
          
        </div>
        <div className="class_center">
          <input className="search_bar" 
          type="text" 
          placeholder="Search here ..." 
          onChange={(text) => searchFilterFunction(text.target.value)}/>
          
        </div>
        <div className="class_right">
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Categories
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              {setCategories()}
            </ul>
          </div>
        </div>
      </div>

        <div className="card" id="features">
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
        {printfunction()}
        </div>      
      </div>
    </>
  );
}
