import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFecth } from '../helpers/getFetch'
import Acordeon from './Acordeon'
import { ItemCount } from './ItemCount'
import ItemDetail from './ItemDetail/ItemDetail'
import { Spinner } from 'react-bootstrap'

function ItemDetailContainer() {

  const[prod, setProd] = useState([])
  const [loading, setLoading] = useState(true)

    const {id} = useParams()
    
    console.log(id)
    useEffect(()=>{
      getFecth
      .then((resp)=> setProd(()=>resp.find(prod => prod.id == id)))
      .catch(err => console.log(err))
      .finally(()=> setLoading(false))
    },[id])

  

  return (
    <>
    { loading ? 
      <Spinner animation="border" />
      :
      <div>
    <ItemDetail prod={prod} />
    <Acordeon/>
    </div>
  }
  </>
    )
}

export default ItemDetailContainer