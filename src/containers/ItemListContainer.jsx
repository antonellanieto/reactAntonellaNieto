import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css"
import { useEffect } from "react";
import ItemList from "../components/ItemList";


const ItemListContainer = () => {
     
    const [productos, setProductos] = useState(null);
 
    useEffect( () =>{
      const getProductos = async () =>{
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data =  await response.json();
            console.log(data);
            setProductos(data);
        }catch (error) {
            console.log("hubo un error");
           
        }
      }
      getProductos();
    }, []);

    // console.log(producto)


   const handleAdd = () =>{
    console.log("Se agregó al carrito");
   };
    
    return (
        <div >
       
{/* 
            {productos ?
            <ItemList products={productos}/>
            :
           null} */}
        </div>
    )

}

export default ItemListContainer