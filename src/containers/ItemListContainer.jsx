import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css"
import { useEffect } from "react";
import ItemList from "../components/ItemList";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  const [productosFiltrados, setProductosFiltrados] = useState([])
  const [modalVisible, setModalVisible] = useState(true)

  const params = useParams()

  console.log(params);

  useEffect(() => {

    const getProductos = async () => {
      try {
        const response = await fetch('https://run.mocky.io/v3/e146f2c3-449c-4f8a-ad6e-21c2274c2f19');
      
     
        const data = await response.json()
        setProductos(data);
        setProductosFiltrados(data);
    
      } catch (error) {
        console.log("Hubo un error:");
        console.log(error);
      }
    }
    getProductos()
  }, [])

  useEffect(() => {
    if (params?.categoryId) {
      const productosFiltrados = productos.filter(product => product.category === params.categoryId)
      setProductosFiltrados(productosFiltrados)
    } else {
      setProductosFiltrados(productos)
    }
  }, [params, productos])

  console.log(productos);

  return (
    <div>
      {productos.length !== 0 ?
        <ItemList products={productosFiltrados} />
        :
        <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
      }
    </div>
  )

};

export default ItemListContainer