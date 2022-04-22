import React, { useEffect, useRef, useState } from 'react';
import { AdminList } from '../components/AdminList';
import { getItems, addItem } from '../firebase/crud';
import { useContext } from "react";
import { LoadingContext } from "../context/LoadingContext";

export const Admin = () => {
    const [itemList, setItemList] = useState([])
    const { forceUpdate, changeStatus } = useContext(LoadingContext)

    const reference = useRef({})

    useEffect(async () => {
        const myItems = await getItems('items')
        setItemList(myItems)
    }, [forceUpdate])

    const saveItem = async (event) => {

        event.preventDefault();
        const itemName = reference.current.name.value
        const itemCategory = reference.current.category.value
        const itemPrice = reference.current.price.value
        const itemDiscount = reference.current.discount.value
        const itemColor = reference.current.color.value
        const itemStock = reference.current.stock.value
        const itemDescription = reference.current.description.value

        const itemImage = reference.current.image.value

        if (itemName.trim() !== "" && itemPrice > 0) {
            try {
                await addItem('items', itemName,itemCategory, itemPrice,itemDiscount,itemColor,itemStock,itemDescription , itemImage)
                changeStatus()
            }
            catch (e) {
                alert(e)
            }
        }
        else {
            alert("Por favor completar los campos con datos validos")
        }
    }

    return <>
        <h3 style={{ textAlign: "center" }}>Agregar Item</h3>
        <div className="form-container">
            <form onSubmit={saveItem} className='big-form'>
                <label>Nombre</label>
                <input type="text" ref={el => reference.current.name = el} />
                <label>categoria</label>
                <input type="text" ref={el => reference.current.category = el} />
                <label>Precio</label>
                <input type="number" ref={el => reference.current.price = el} />
                <label>descuento</label>
                <input type="number" ref={el => reference.current.discount = el} />
                <label>color</label>
                <input type="text" ref={el => reference.current.color = el} />
                <label>stock</label>
                <input type="number" ref={el => reference.current.stock = el} />
                <label>descripcion</label>
                <input type="text" ref={el => reference.current.description = el} />
                <label>imagen</label>
                <input type="text" ref={el => reference.current.image = el} />

                <input type="submit" value="Guardar Item" />
            </form>
        </div>

        <AdminList itemList={itemList} />
    </>

}