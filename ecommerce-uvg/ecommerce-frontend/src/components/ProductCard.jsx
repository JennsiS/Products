/* eslint-disable react/prop-types */
import React from 'react';
import { FaCartPlus, FaStar } from 'react-icons/fa';
import firebase from "../firebase";

export default function ProductCard(props) {
  const { imgSrc } = props;
  const { titulo } = props;
  const { precio } = props;
  const { descripcion } = props;
  const { id } = props;
  const { cantidad } = props;

  function addCompra(imagen, precio, itemcode, nombre, cantidad_disponible) {
    if (cantidad_disponible > 0) {
      firebase.firestore().collection('carrito').doc('ZsuFnGu76TWPQus6xGce').set(
        {items: firebase.firestore.FieldValue.arrayUnion( {
                "imagen":imagen, 
                "precio":precio, 
                "itemcode":itemcode, 
                "nombre":nombre, 
                "cantidad":cantidad_disponible
        })},
        {merge: true}
      );
      alert(`${nombre} added to cart!`);
    } else {
      alert(`Couldn't add ${nombre} to cart.`);
    }
  }

  return (
    <div className="card" alt = "prueba" id={id} >
        <img className="card-img-top" src={imgSrc} alt=""/>
        <div className="card-body">
            <h5 className="card-title">{titulo}</h5>
            <h5 className="card-title">{"("+cantidad+") $"+ precio}</h5>
            <div className="desc">
              <p className="card-text">{descripcion}</p>
            </div>
            
        </div>
        <div className = "divbtn">
          <a href="#ref" className="btn btn-primary btncard" onClick={() => {addCompra(imgSrc,precio,id,titulo,cantidad)}}><FaCartPlus/></a>
          <a href="#ref" className="btn btn-primary btncard" id="btn-star"><FaStar/></a>
        </div>
    </div>
    
  );
}


