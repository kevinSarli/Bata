import React from 'react'
import { BsCartCheck } from "react-icons/bs";
import { useCartContext } from "../context/CartContext";


function CartWidget() {
  const {totalProducts} = useCartContext()   
  return (
    <>
    <li><BsCartCheck/> {totalProducts() > 0 && totalProducts()} </li>
    
    </>
  )
}

export default CartWidget