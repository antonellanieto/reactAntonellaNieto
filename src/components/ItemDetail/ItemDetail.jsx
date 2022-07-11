import React from 'react';
import Contador from '../button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const ItemDetail = ({product}) => {
  const navigate = useNavigate();

  product.stock = 10;
  const [qtyAdded, setQtyAdded] = useState(0);

  const handleConfirm = (qty) => {
      setQtyAdded(qty);
  }

  const handleTerminate = () => {
      navigate('/cart')
  }

  console.log(qtyAdded);
  return (
    <div>
    <div className='container-fluid'>
      <h2>{product.id}</h2>
      <h1>{product.name}</h1>
      <img src={product.img} alt="product-detail"/>
      <p>{product.description}</p>
      {!qtyAdded ?
                <Contador onConfirm={handleConfirm} maxQuantity={product.stock} />
                :
                <button onClick={handleTerminate} className='terminarCompra'>Terminar compra</button>
            }
  </div>
</div>
  )
}

export default ItemDetail;