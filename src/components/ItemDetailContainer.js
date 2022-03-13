import React from 'react'
import Acordeon from './Acordeon'
import { ItemCount } from './ItemCount'
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {
  return (
    <div>
        <ItemDetail/>
        <ItemCount/>
        <Acordeon/>
    </div>
  )
}

export default ItemDetailContainer