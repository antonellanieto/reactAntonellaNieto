import React from 'react'

const ItemDetail = ({product}) => {
    console.log(product);
  return (
    <div>
         <div className='card'>
            <div className='card-body'>
                
              <img src={product.image} alt="" />
              <h4 className='card-title'>{product.title}</h4>
              <h5 className='card-text'>{product.description}</h5>
              <h5 className='card-text'>{product.price}</h5>

            </div>
            </div>
    </div>
  )
}

export default ItemDetail