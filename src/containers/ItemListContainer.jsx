import React from "react";
import ariel from "../assets/ariel.jpg";
import jasmine from "../assets/jasmine.jpg"
import lilo from "../assets/lilo.jpg"
import pocahontas from "../assets/pocahontas.jpg"
import stich from "../assets/stich.webp"
import 'bootstrap/dist/css/bootstrap.min.css';

import "./styles.css"


const ItemListContainer = () => {
    return (
        <div >
            <div className="container">
           <div className="row">
            <img src={ariel} alt="" className="imgOne col"/>
            <img src={stich} alt="" className="imgOne col"/>
            <img src={pocahontas} alt="" className="imgOne col"/>
            <img src={lilo} alt="" className="imgOne col"/>
            <img src={jasmine} alt="" className="imgOne col"/>
            </div>
            </div>
        </div>
    )

}

export default ItemListContainer