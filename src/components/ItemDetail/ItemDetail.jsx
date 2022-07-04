import React from 'react';
import Contador from '../button';



const ItemDetail = ({product}) => {
    console.log(product);
  return (
    <div>
    <div className='container'>
      <h2>{product.id}</h2>
      <h1>{product.name}</h1>
      <img src={product.img} alt="product-detail"/>
      <p>{product.description}</p>
      <div><Contador/></div>
  </div>
</div>
  )
}

export default ItemDetail;