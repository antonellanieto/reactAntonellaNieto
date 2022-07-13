import React from 'react'
import { useContext } from 'react';
import { Shop } from '../../context/ShopContext';
import './style.css'

const Cart = () => {

const { cart } = useContext(Shop);
console.log(cart);


  return (
    <div >

      <ul className='listaCarrito'>
        {cart.map(producto =>{
          return <li key={producto.id}><img src={producto.img} alt="" /></li>
                 
        
        })}
      </ul>


    </div>
  )
};

export default Cart;
