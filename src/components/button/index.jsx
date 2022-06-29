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
;
  }

 
  return (
    <div>
      <button onClick={onAdd} className="addButton">+</button>
      <button onClick={onDecrement} className="decButton">-</button>
      <p>{count}</p>
      <button onClick={handleAdd} className="agregarCarrito"> Agregar al carrito</button>



    </div>
  )
};

export default Contador;
