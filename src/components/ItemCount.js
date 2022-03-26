import React from "react";
import { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import Intercambiabilidad from "./Intercmbiabilidad";

export const ItemCount = ({ initialStock , initial, onAdd }) => {
  const [count, setCount] = useState(initial);
  const [stock, setStock] = useState(initialStock);

  const aumentar = () =>{
    if (count < 6) {
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
      <Intercambiabilidad/>
    </>
  );
};
