import React from 'react'
import {useState,useEffect} from "react"
import { Spinner } from 'react-bootstrap'
import { getFecth } from '../helpers/getFetch'
import ItemList from './ItemList'
//import Item from "./Item/Item"

function ItemListContainer() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    getFecth
    .then((resp)=>setProducts(resp))
    .catch(err => console.log(err))
    .finally(()=> setLoading(false))
  }, [])

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