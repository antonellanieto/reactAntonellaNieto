import React from 'react'
import './styles.css'
import { useState } from 'react'








const Contador = ({ handleAdd, initial, stock }) => {

  const [count, setCount] = useState(initial);
  const onAdd = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  }
  const onDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }

  }

 
  return (
    <div className='d-flex flex-row mb-3'>
      <button onClick={onAdd} className="addButton">+</button>
      <p>{count}</p>
      <button onClick={onDecrement} className="decButton">-</button>
    
      <button onClick={handleAdd} className="agregarCarrito"> Agregar al carrito</button>



    </div>
  )
};

export default Contador;
