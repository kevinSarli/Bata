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
      <div className="grupoCart">

      <ButtonGroup aria-label="Basic example">
        <Button variant="secondary" onClick={aumentar}>
          +
        </Button>

        <Button variant="secondary" onClick={disminuir}>
          -
        </Button>
      </ButtonGroup>
      <p className="stockdetail">stock : {stock}</p>
      </div>
      <h4 className="cartcant">Productos seleccionados : {count}</h4>
      <div>

      {
                inputType === 'button' ? 
                <Button className="buttonAgregar" onClick={agregar}>
                agregar al carrito
              </Button>
                : 
                    <InputSeteado />
            }

      </div>
    </>
  );
};
