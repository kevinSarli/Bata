import React from 'react'
import {useState,useEffect} from "react"
import { Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import ItemList from '../components/ItemList'

import {getFirestore,query,where,getDocs,collection} from "firebase/firestore"

function ItemListContainer() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  
  const {id} = useParams()

  console.log(id)


useEffect(()=>{
  const db = getFirestore()

  const queryCollectionFinal = !id
      ? collection(db, 'items')
      :query(collection(db, 'items'),
      where('category','==',id))

      getDocs(queryCollectionFinal)
      .then (resp => setProducts(resp.docs.map(producto => ({ id:producto.id, ...producto.data() } ))))
      .catch(err => console.log(err))
      .finally(()=> setLoading(false))
},[id])

console.log(products)
  return (
    <>
    { loading ? 
      <Spinner animation="border" />
    :
    <ItemList item={products}/>
    }
        
    </>
  )
}

export default ItemListContainer