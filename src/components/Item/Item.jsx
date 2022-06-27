import React from 'react'
import Contador from '../navbar/input';
import './item.css'


const Item = ({product}) => {
    const handleAdd = () =>{
        console.log("Se agregó al carrito");
       };
        
  return (
    <div className='card'> 
        <div className='card-body'>
        
        <img src={product.img} alt=""/>
        <h4 className='card-title'>{product.nombre}</h4>
        <h5 className='card-text'>{product.precio}</h5>
        <Contador handleAdd={handleAdd} initial={0} stock={10}/>
        </div>
  </div>
  )
}

export default Item;