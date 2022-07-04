import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    

  const [productDetail, setProductDetail] = useState({})

  const params = useParams();

  console.log(params);

  useEffect(()=> {
      const getProductos = async () => {
          try {
              const response = await fetch(`https://run.mocky.io/v3/e146f2c3-449c-4f8a-ad6e-21c2274c2f19/${params.productoId}`)
              const data = await response.json();
              setProductDetail(data);
          } catch (error) {
              console.log(error)
          }
      }
      getProductos();

  }, [params])

  return (
      Object.keys(productDetail).length !== 0 ?
      <ItemDetail product={productDetail}/>
      :
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
  )
};

export default ItemDetailContainer;