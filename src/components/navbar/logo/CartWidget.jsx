import React, { useContext } from 'react'
import { HiShoppingCart } from 'react-icons/hi'
import './cartwidget.css'
import '../style.css'
import { Shop } from '../../../context/ShopContext'



export const CartWidget = () => {
  const {cart} = useContext(Shop);
  return (
          <div>
          <HiShoppingCart/>
           <span className='cantidad'> {cart.length && cart.length}</span>
             
         
          </div>
         
        
  )
}

export default CartWidget