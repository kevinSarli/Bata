import React from 'react'
import {  Card } from 'react-bootstrap'
import { useCartContext } from '../../context/CartContext';
import { BsHeartFill } from "react-icons/bs";

function Destacados() {
  const {
    favList,
    deleteProductFav
  } = useCartContext();


  
  return (
    <>
        
        {favList.map((prod) => (   
          <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={prod.image} />
  <Card.Body>
    <Card.Title>{prod.name}</Card.Title>
    <Card.Text>
    <p className={prod.discount !== 0 ? "pricecard2" : "pricecard"}>
                {prod.price}$
              </p>
              {prod.price - (prod.price * prod.discount) / 100 !==
                prod.price && (
                <p className="pricefinal">
                  {prod.discount !== 0 &&
                    prod.price - (prod.price * prod.discount) / 100}
                  $
                </p>
              )}
              <p className="colorcard">{prod.color}</p>
              {prod.discount !== 0 && (
                <p className="discountcard">{prod.discount}%</p>
              )}
    </Card.Text>
  </Card.Body>
  <button onClick={() => deleteProductFav(prod.id)}> <BsHeartFill /></button>

</Card>
))

}
    </>
  )
}

export default Destacados