import React from 'react'
import { useEffect } from 'react'
import './styles.css'
import { useState } from 'react'



const Contador = () => {

  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count + 1);
  }, [count]);
  

  return (
    <div>
      <button onClick={() => setCount((c) => count + 1)}>+</button>

      <p>{calculation}</p>
   

   </div>
  )
}

export default Contador
export const count = true;