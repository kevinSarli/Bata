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
  }}, [id])

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