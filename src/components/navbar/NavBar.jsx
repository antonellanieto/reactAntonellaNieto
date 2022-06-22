import React from "react";
import Input from "./input";
import './style.css';
import CartWidget  from "./logo/CartWidget";






const NavBar = () => {
    return(
      <ul>
        
      <li><a href="default.html">Home</a></li>
      <li><a href="news.asp">Productos</a></li>
      <li><a href="contact.asp">Contacto</a></li>
      <li><a href="about.asp">Nostros</a></li>
      <Input  valorInput={'Buscar'}/>
      <CartWidget/>
  
    </ul>
    
    )
}


export default NavBar;