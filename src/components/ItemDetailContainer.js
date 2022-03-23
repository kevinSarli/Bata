import React from 'react'
import Acordeon from './Acordeon'
import { ItemCount } from './ItemCount'
import ItemDetail from './ItemDetail/ItemDetail'

function ItemDetailContainer() {

  return (
    <div>
        <ItemDetail />
        <ItemCount initialStock={5} initial={1}/>
        <Acordeon/>
    </div>
  )
}

export default ItemDetailContainer