import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Acordeon from '../components/Acordeon'
import { ItemCount } from '../components/ItemCount'
import ItemDetail from '../components/ItemDetail/ItemDetail'
import { Spinner } from 'react-bootstrap'
import { doc, getDoc, getFirestore } from 'firebase/firestore'

function ItemDetailContainer() {

  const[prod, setProd] = useState([])
  const [loading, setLoading] = useState(true)

    const {id} = useParams()
    
    console.log(id)

    useEffect(()=>{
  const db = getFirestore()

  const queryDoc = doc(db, 'items', id)
  getDoc(queryDoc)
  .then (resp => setProd({ id:resp.id, ...resp.data() }))
  .catch(err => console.log(err))
  .finally(()=> setLoading(false))
}, [id])

  

  return (
    <>
    { loading ? 
      <Spinner animation="border" />
      :
      <div>
    <ItemDetail prod={prod} />
    </div>
  }
  </>
    )
}

export default ItemDetailContainer