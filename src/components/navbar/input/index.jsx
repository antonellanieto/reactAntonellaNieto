import React from 'react'
import './styles.css'

const Input = (props) => {
    console.log(props)
  return (
    <input placeholder='' className='app-input'
    value={props.valorInput}
    
    
    />
  )
}

export default Input