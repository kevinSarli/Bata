import React, { useContext } from 'react'
import { createContext, useState } from "react";


export const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

function CartContextProvider({children}) {
    const[cartList,setcartList] = useState([])
    const[favList,setfavList] = useState([])

    const totalProducts = () => {
        return cartList.reduce((acc, prod) => (acc += prod.cantidad), 0);
    };

    const totalPrice = () => {
        return cartList.reduce(
            (total, obj) => (total += obj.price * obj.cantidad),
            0
        );
    };


    const addToCart=(item)=>{
        const foundProduct = cartList.find((prod) => prod.id === item.id);

        if (foundProduct) {
            foundProduct.cantidad += item.cantidad;
            setcartList([...cartList]);
        } else {
            setcartList([...cartList, item]);
        }
    };

    const addToFav =(item)=>{
        const foundProduct = favList.find((prod) => prod.id === item.id);

        if (foundProduct ) {
            setfavList([...favList]);
        } else {
            setfavList([...favList, item]);
        }    }

    const deleteProductFav = (id) => {
        let aux = favList.filter((item) => item.id !== id);

        setfavList(aux);
    };
    
    const deleteProduct = (id) => {
        let aux = cartList.filter((item) => item.id !== id);

        setcartList(aux);
    };

    const vaciarCart = () => setcartList([]);


    const aumentar=(id)=>{
        const foundProduct = cartList.find((prod) => prod.id === id);

        if (foundProduct) {
            foundProduct.cantidad += 1;
            setcartList([...cartList]);
        } 
    };
    const disminuir=(id)=>{
        const foundProduct = cartList.find((prod) => prod.id === id);

        if (foundProduct) {
            foundProduct.cantidad -= 1;
            setcartList([...cartList]);
        } 
    };
       
    return (
        <CartContext.Provider value={{
        addToCart,
        addToFav,
        favList,
        deleteProductFav,
        totalProducts,
        totalPrice,
        cartList,
        deleteProduct,
        vaciarCart,
        aumentar,
        disminuir
        

        
        
    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider