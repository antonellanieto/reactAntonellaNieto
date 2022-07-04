import React from "react";
import './style.css';
import CartWidget  from "./logo/CartWidget";
import {Link} from 'react-router-dom';





const NavBar = () => {
    return(
      <div className="container-fluid">
      <ul className="row">
        
               <li className='nav-element col-2'><Link to='/'>Home</Link></li>
                <li className='nav-element col-2'><Link to='/category/Disney'>Disney</Link></li>
                <li className='nav-element col-2'><Link to='/category/DC'>D C</Link></li>
                <li className="nav-element col-2"> <a href=""><CartWidget/></a></li>
    
      
   
  
    </ul>
    </div>
    )
}


export default NavBar;