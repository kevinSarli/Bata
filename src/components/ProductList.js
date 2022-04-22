import React from "react";
import "../App.css"
import Item from "./Item/Item";
import "bootstrap/dist/css/bootstrap.min.css"
import ListFilter from "../../ListFilter";

const ItemList = ({item})=>{
  return(
    <>

        <ListFilter/>
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