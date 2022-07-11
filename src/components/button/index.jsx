import React from 'react'
import './styles.css'
import { useState } from 'react'








const Contador = ({ onConfirm, maxQuantity }) => {

  const [value, setValue] = useState(1);

  const handleConfirm = () => {
      if (value <= maxQuantity) {
          onConfirm(value)
      }
      else {
          alert("Value > maxQuantity")
      }
  }
  
  const onAdd = () => {
    if (value < maxQuantity) {
      setValue(value + 1);
    }
  }
  const onDecrement = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  }
  
 
  return (
    <div className='d-flex flex-row mb-3'>
      <button onClick={onAdd} className="addButton">+</button>
      <p>{value}</p>
      <button onClick={onDecrement} className="decButton">-</button>
    
      <button onClick={handleConfirm} className="agregarCarrito"> Agregar al carrito</button>



    </div>
  )
};

export default Contador;
