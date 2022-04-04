import React, { useEffect, useState } from "react";
import { Table,ButtonGroup,Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

const Cart = () => {
  const {
    totalPrice,
    cartList,
    deleteProduct,
    vaciarCart,
    aumentar,
    disminuir
  } = useCartContext();

  console.log(cartList);
  return (
<>
    <div className=" p-1">
    <div className="table-responsive">

      <Table striped bordered hover variant="dark" className="table table-hover ">
        {cartList !=0 &&
        <thead >
          <tr >
            <th>#</th>
            <th>imagen </th>
            <th>nombre </th>
            <th>color </th>
            <th>precio </th>
            <th>unidades </th>
            <th>precio total </th>
            <th>eliminar </th>
            <th>comprar </th>
          </tr>
        </thead>
        }
        {cartList.map((prod) => (   
          <tbody>
            <tr>
              <td key={prod.id}>{prod.id}</td>
              <td className="w-25 p-1">
                <img className="w-25 p-1" src={prod.image[0]} alt="imagen" />
              </td>
              <td className=" p-5">{prod.name}</td>

              <td className=" p-5">{prod.color}</td>

              <td className=" p-5">{prod.price}</td>
              <td className=" p-5">
                {prod.cantidad >1 && <button onClick={()=>disminuir(prod.id)}>-</button>}
                
                { prod.cantidad}
                 {prod.cantidad<prod.stock && <button onClick={()=>aumentar(prod.id)}>+</button>}
              </td>
              <td className=" p-5">{prod.price * prod.cantidad}</td>
              <td className=" p-5"><button onClick={() => deleteProduct(prod.id)}> eliminar </button></td>
              <td className=" p-5">comprar</td>
            </tr>
          </tbody>

))

}
      </Table>
</div>
{totalPrice() > 0 ?
<>
      <h3>Precio Total {totalPrice()}</h3>
<ButtonGroup aria-label="Basic example">

  <Button variant="secondary" onClick={() => vaciarCart()}>vaciar carrito</Button>
  <Button variant="secondary">comprar </Button>
  <Link to='/' >

<button className="btn btn-outline-success" onClick={()=>console.log('seguir comprando') } >seguir comprando</button>
</Link>
</ButtonGroup>
</>
: 
<>
<h2>tu carrito esta vacio</h2>
<Link to='/' >

<button className="btn btn-outline-success" onClick={()=>console.log('seguir comprando') } >ir al home</button>
</Link>
</>

}

    </div>
</>
  );
};
export default Cart;
