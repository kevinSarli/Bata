import React, { useState } from 'react'
import { BsHeartFill, BsCartFill, BsHeart, BsCart } from "react-icons/bs";
import { useCartContext } from '../context/CartContext';


const ButtonCartFav = ({onAddFav, onRemoveFav}) => {
    const [buttonCart, setButtonCart] = useState("buttoncart");
  const [buttonFav, setButtonFav] = useState("buttonfav");
  const {addToFav,deleteProductFav, favList} = useCartContext()


  

  

  const agregarFav = () =>{
    setButtonFav('setbuttonfav')
    onAddFav(+1)

  }
  const quitarFav = () =>{
    setButtonFav('buttonfav')
    onRemoveFav()

  }
  return (
    <>
            {buttonFav == "buttonfav" ? (
              <button onClick={agregarFav} > <BsHeart /></button>
            ) : (
              <button onClick={quitarFav}> <BsHeartFill /></button>
            )}

    </>
  )
}

export default ButtonCartFav