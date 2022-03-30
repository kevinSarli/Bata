import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFecth } from '../helpers/getFetch'
import Acordeon from './Acordeon'
import { ItemCount } from './ItemCount'
import ItemDetail from './ItemDetail/ItemDetail'

function ItemDetailContainer() {

  const[prod, setProd] = useState([])
    
    const {id} = useParams()
    
    console.log(id)
    useEffect(()=>{
      getFecth
      .then((resp)=> setProd(()=>resp.find(prod => prod.id == id)))
    },[id])

  

  return (
    <div>
        <ItemDetail prod={prod} />
        <Acordeon/>
    </div>
  )
}

export default ItemDetailContainer