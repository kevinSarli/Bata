import React from 'react'
import {useState,useEffect} from "react"
import { Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { getFecth } from '../helpers/getFetch'
import ItemList from './ItemList'

import {getFirestore,query, doc,getDoc,where,getDocs,collection} from "firebase/firestore"
//import Item from "./Item/Item"

function ItemListContainer() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [product, setProduct] = useState({})
  
  const {id} = useParams()

  console.log(id)

  /*useEffect(()=>{
    if(id){
    getFecth
    .then((resp)=>setProducts(resp.filter(prod=> prod.category === id)))
    .catch(err => console.log(err))
    .finally(()=> setLoading(false))
  }else{
    getFecth
    .then((resp)=>setProducts(resp))
    .catch(err => console.log(err))
    .finally(()=> setLoading(false))
  }
}, [id])*/

/*useEffect(()=>{
  const db = getFirestore()

  const queryDoc = doc(db, 'items', 'OO9NG0YVYIBmaoPOS5Og')
  getDoc(queryDoc)
  .then (resp => setProduct({ id:resp.id, ...resp.data() }))
}, [id])*/



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