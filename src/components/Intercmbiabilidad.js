import { useState } from "react";
import { Link } from "react-router-dom";


const InputSeteado = ()=> {

    return (
        <>
        <Link to='/cart' >
            <button className="btn btn-outline-primary" onClick={()=>console.log('ir a carrito') } >Ir al carrito</button>
        </Link>
        <Link to='/' >

            <button className="btn btn-outline-success" onClick={()=>console.log('seguir comprando') } >seguir comprando</button>
        </Link>
        </>
    )
}



const ButtonAgregar= ({agregar})=> {
    return <button className="btn btn-outline-success" onClick={agregar}>Agregar Al carrito</button>

}

const Intercambiabilidad = () => {

    const [inputType, setInputType ] = useState('button')

    const agregar=()=>{
        setInputType('input')
    }
    
    return (
        <div>
            
            {
                inputType === 'button' ? 
                    <ButtonAgregar agregar={agregar} />
                : 
                    <InputSeteado />
            }
        </div>
    )
}

export default Intercambiabilidad
