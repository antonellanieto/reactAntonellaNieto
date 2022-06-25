import { useEffect } from "react";
import { useState } from 'react'
import './styles.css'
import { count } from "./index.jsx";


const Resta = () => {
    const [resta, setResta] = useState(0);
    const [restar, setRestar] = useState(0);

    useEffect(() => {
        setRestar(() => resta - resta);
    }, [resta]);


    return (
        <div>
            {/* <button onClick={() => setResta((c) => count - resta)}>-</button>

            <p>{restar}</p> */}
        </div>
    )

};

export default Resta;