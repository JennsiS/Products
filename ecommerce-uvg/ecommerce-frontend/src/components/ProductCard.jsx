/* eslint-disable react/prop-types */
import React from 'react';
import { FaCartPlus, FaStar } from 'react-icons/fa';
import AddToCart from './AddToCart';

export default function ProductCard(props) {
  const { imgSrc } = props;
  const { titulo } = props;
  const { precio } = props;
  const { descripcion } = props;
  const { id } = props;
  return (
    <div className="card" alt = "prueba" id={id} >
        <img className="card-img-top" src={imgSrc} alt=""/>
        <div className="card-body">
            <h5 className="card-title">{titulo}</h5>
            <h5 className="card-title">{"$"+ precio}</h5>
            <p className="card-text">{descripcion}</p>
            <a href="#ref" className="btn btn-primary" onClick={AddToCart}><FaCartPlus/></a>
            <a href="#ref" className="btn btn-primary" id="btn-star"><FaStar/></a>
        </div>
    </div>
    
  );
}
