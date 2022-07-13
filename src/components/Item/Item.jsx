import React from 'react'
import Contador from '../button';
import './item.css'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

const Item = ({ product }) => {
  const navigate = useNavigate();

  const handleDetail = () => {
    navigate(`/detail/${product.id}`);
  };


  return (

    <div>
         <div className='card'>
            <div className='card-body'>

              <img src={product.img} alt="" onClick={handleDetail}/>
              <h4 className='card-title' onClick={handleDetail}>{product.name} </h4>
              <h5 className='card-text'>$ {product.price}</h5>
              <h5 className='card-text'>{product.description}</h5>
            
  
            </div>
            </div>
             
    </div>
  )
}

export default Item;