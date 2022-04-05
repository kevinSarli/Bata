import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from "firebase/firestore";
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

  const generarOrden = async(e)=>{
    e.preventDefault()
    let orden={}

    orden.buyer = {name : 'kevin', email:'kevinsarli@gmail.com', prone:"1111111111" }

    orden.total = totalPrice()
    orden.items = cartList.map(cartItem =>{
      const id = cartItem.id
      const nombre = cartItem.name
      const precio = cartItem.price * cartItem.cantidad

      return {id,nombre,precio}
    })
    
    const db = getFirestore()
    const queryCollectionItems = collection(db,'orders')
    await addDoc(queryCollectionItems, orden)
    .then(({id}) => alert("su compra fue realizada con exito - el ID de su compre es: " + id))
    vaciarCart()

    const queryCollection = collection(db,'items')

    const queryActualizarStock = await query(
      queryCollection,
      where(documentId(),'in',cartList.map(it => it.id))
    )
    const batch = writeBatch(db)

    await getDocs(queryActualizarStock)
    .then(resp => resp.docs.forEach(res => batch.update(res.ref,{
      stock: res.data().stock - cartList.find(item => item.id === res.id).cantidad
    })))

    batch.commit()

  }

  
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
                
                { prod.cantidad < prod.stock ? prod.cantidad : prod.stock}  
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
  <Button variant="secondary" onClick={generarOrden}>generar orden </Button>
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
