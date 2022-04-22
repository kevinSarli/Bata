import React, { useState } from 'react'
import { BsHeartFill, BsHeart } from "react-icons/bs";


const ButtonCartFav = ({onAddFav, onRemoveFav}) => {
  const [buttonFav, setButtonFav] = useState("buttonfav");


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