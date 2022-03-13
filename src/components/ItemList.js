import React from "react";
import "../App.css"
import Item from "./Item/Item";
import "bootstrap/dist/css/bootstrap.min.css"

const ItemList = ({item})=>{
  return(
    <>
    <div className="contenedorlist">
    <div className="listado ">
      <div className="boxlist">
      {item.map((prod)=><Item  prod={prod} key={prod.id}/>)}

      </div>

    </div>
    </div>
    </>
    
  )
}

export default ItemList;