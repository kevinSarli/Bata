import React from 'react'
import { useCartContext } from '../../context/CartContext';
import Acordeon from '../Acordeon';
import ButtonCartFav from '../ButtonCartFav';

import { ItemCount } from '../ItemCount';


function ItemDetail({prod}) {
    


  const {addToCart, cartList} = useCartContext()


  const {addToFav,deleteProductFav, favList} = useCartContext()

  const onAddFav = (cant)=>{
    console.log(cant)
    addToFav({ ...prod, cantidad:cant })
  }
  console.log(favList)

  const onRemoveFav = (cant)=>{
    console.log(cant)
    deleteProductFav(prod.id)
  }
  console.log(favList)

  const onAdd = (cant)=>{
    console.log(cant)
    addToCart({ ...prod, cantidad:cant })
  }
  console.log(cartList)

  return (
    <>
            <article  className="detailcontainercard ">
                <div className="detailcontainerimg">
                  <div className=""><img
                  className=""
                  src={prod.image}
                  alt="imagen"
                />
                </div>

                <div className="detaildetalles">
                  <h4 className="detailtitlecard ">{prod.name}</h4>
                  <div className="boxPrice">

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
                  </div>
                  <ButtonCartFav onAddFav={onAddFav} onRemoveFav={onRemoveFav}/>
                  {prod.discount !== 0 && (
                    <p className="detaildiscountcard">{prod.discount}%</p>
                  )}
                </div>
                </div>
            </article>

            <ItemCount initialStock={prod.stock - 1} maximoincart={prod.stock + 1} initial={1} onAdd={onAdd}/>
            <Acordeon prod={prod.description}/>
    </>
  )
}

export default ItemDetail