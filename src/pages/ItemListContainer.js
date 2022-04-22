import React from 'react'
import {useState,useEffect} from "react"
import { Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import ItemList from '../components/ItemList'

import {getFirestore,query, doc,getDoc,where,getDocs,collection} from "firebase/firestore"

function ItemListContainer() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [product, setProduct] = useState({})
  
  const {id} = useParams()

  console.log(id)


useEffect(()=>{
  const db = getFirestore()

  const queryCollection = collection(db, 'items')
  if(id){

    const queryfilter = query(queryCollection,where('category','==',id))
    getDocs(queryfilter)
    .then (resp => setProducts(resp.docs.map(producto => ({ id:producto.id, ...producto.data() } ))))
    .catch(err => console.log(err))
    .finally(()=> setLoading(false))
  }else{
    getDocs(queryCollection)
  .then (resp => setProducts(resp.docs.map(producto => ({ id:producto.id, ...producto.data() } ))))
  .catch(err => console.log(err))
  .finally(()=> setLoading(false))
  }
  }, [id])


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