import React, {  useState } from 'react'
import { useCartContext } from '../../context/CartContext';

import Item from "../Item/Item";
import { ItemCount } from '../ItemCount';


function ItemDetail({prod}) {
    

  const {addToCart, cartList} = useCartContext()

  const onAdd = (cant)=>{
    console.log(cant)
    addToCart({ ...prod, cantidad:cant })
  }
  console.log(cartList)

  return (
    <>
            <article  className="detailcontainercard ">
                <div className="detailcontainerimg">
                  <div className="detailboximage"><img
                  className="productdetail"
                  src={prod.image}
                  alt="imagen"
                />
                </div>

                <div className="detaildetalles">
                  <h4 className="detailtitlecard ">{prod.name}</h4>
                  <p
                    className={prod.discount !== 0 ? "detailpricecard2" : "detailpricecard"}
                  >
                    {prod.price}$
                  </p>
                  {prod.price - (prod.price * prod.discount) / 100 !==
                    prod.price && (
                    <p className="detailpricefinal">
                      {prod.discount !== 0 &&
                        prod.price - (prod.price * prod.discount) / 100}
                      $
                    </p>
                  )}
                  <p className="detailcolorcard">c</p>
                  {prod.discount !== 0 && (
                    <p className="detaildiscountcard">{prod.discount}%</p>
                  )}
                </div>
                </div>
            </article>
            <ItemCount initialStock={5} initial={1} onAdd={onAdd}/>
    </>
  )
}

export default ItemDetail