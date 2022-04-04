import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import React from 'react'
import {useState,useEffect} from "react"
import { Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { getFecth } from '../helpers/getFetch'
import ProductList from './ProductList'
//import Item from "./Item/Item"

function ProductListContainer() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  
  const {id} = useParams()

  console.log(id)

  useEffect(()=>{
    const db = getFirestore()
  
    const queryCollection = collection(db, 'items')
    {
      getDocs(queryCollection)
    .then (resp => setProducts(resp.docs.map(producto => ({ id:producto.id, ...producto.data() } ))))
    .catch(err => console.log(err))
    .finally(()=> setLoading(false))
    }
    }, [id])
  return (
    <>
    { loading ? 
      <Spinner animation="border" />
    :
    <ProductList item={products}/>
    }
        
    </>
  )
}

export default ProductListContainer