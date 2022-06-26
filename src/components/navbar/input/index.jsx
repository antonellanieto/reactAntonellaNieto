import React from 'react'
import { useEffect } from 'react'
import './styles.css'
import { useState } from 'react'



const Contador = ({handleAdd, initial, stock}) => {

  const [count, setCount] = useState(initial);
  const onAdd = () => {
    setCount(count + 1);

  }
  const onDecrement = () => {
    if (count > 0){
      setCount(count - 1);
    }

  }


  return (
    <div>
      <button onClick={onAdd}>+</button>
      <button onClick={onDecrement}>-</button>
      <p>{count}</p>
      <button onClick={handleAdd}> Agregar al carrito</button>
      


  
   

   </div>
  )
}

export default Contador
