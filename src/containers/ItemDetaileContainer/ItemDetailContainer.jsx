import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import ItemDetail from '../../components/ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    
    const[productDetail, setProductDetail] = useState({});
    const[error, setError] = useState('Error');
    useEffect(() => {
         const getProducts = async () =>{
           try {
            const resp = await fetch('https://fakestoreapi.com/products/1');
            const data = await resp.json();
            setProductDetail(data);
            
           } catch (error) {
            console.log(error);
            setError(error.message)
            
           }
          }   
       getProducts();
    }, []);

  

  return (
    <div><ItemDetail product={productDetail}/></div>
  )
}

export default ItemDetailContainer;