import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFecth } from '../../helpers/getFetch'
import Item from "../Item/Item";


function ItemDetail() {
    const[prod, setProd] = useState([])
    
    const {id} = useParams()
    
    console.log(id)
    useEffect(()=>{
      getFecth
      .then((resp)=> setProd(()=>resp.find(prod => prod.id == id)))
    },[id])


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
    </>
  )
}

export default ItemDetail