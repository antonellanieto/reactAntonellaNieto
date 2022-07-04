import React from 'react'
import Item from '../Item/Item'
import './itemList.css'

const ItemList = ({products}) => {
    
  return (
   <div className='d-flex flex-wrap justify-content-around contenedor'>
     
     {products.map(producto => {
              return <Item product={producto} key={producto.id}/>
     })}


   </div>
  )
}

export default ItemList