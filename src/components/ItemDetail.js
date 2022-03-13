import React, { useEffect, useState } from 'react'
import { getFecth } from '../helpers/getFetch'
import Item from './Item/Item'

function ItemDetail() {
    const[prod, setProd] = useState([])

    useEffect(()=>{
        getFecth
        .then((resp)=> setProd(resp.find(prod => prod.id === 1)))
    },[])


  return (
    <Item prod={prod} key={prod.id}/>
  )
}

export default ItemDetail