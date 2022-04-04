import { getFirestore } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";


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

export const ItemCount = ({ initialStock ,maximoincart, initial, onAdd }) => {
  const [count, setCount] = useState(initial);
  const [stock, setStock] = useState(initialStock);

  const [inputType, setInputType ] = useState('button')

  const db = getFirestore()

  const aumentar = () =>{
    if (count < maximoincart) {
      setCount(count + 1);
    setStock(stock - 1)
    }
    } 
  const disminuir = () =>{
    if (count > 1) {
      setCount(count - 1);
    setStock(stock + 1)
    }
    } 

    const agregar = () =>{
      onAdd(count)
      setInputType('input')

    }



  return (
    <>
      <p>stock : {stock}</p>
      <ButtonGroup aria-label="Basic example">
        <Button variant="secondary" onClick={aumentar}>
          +
        </Button>

        <Button variant="secondary" onClick={disminuir}>
          -
        </Button>
      </ButtonGroup>
      <h4>Productos seleccionados : {count}</h4>
      <div>

      {
                inputType === 'button' ? 
                <Button  onClick={agregar}>
                agregar al carrito
              </Button>
                : 
                    <InputSeteado />
            }


      

      </div>
    </>
  );
};
