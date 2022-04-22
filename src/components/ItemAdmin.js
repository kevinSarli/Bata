import { useContext, useState, } from "react";
import { deleteItem, updateItem } from '../firebase/crud';
import { LoadingContext } from "../context/LoadingContext";

export const ItemAdmin = ({ id, name,category, price,discount,color,stock,description,image }) => {
    const [editing, setEditing] = useState(false)
    const [formData, setFormData] = useState({ name,category, price,discount,color,stock,description,image })
    const { changeStatus } = useContext(LoadingContext)

    const handleChange = (event) => {
        console.log(event.target.value)
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    const removeItem = async (id) => {
        try {
            await deleteItem('items', id)
            changeStatus()
        }
        catch (error) {
            alert(error)
        }
    }

    const editItem = async (event) => {
        event.preventDefault()
        if (formData.name.trim() !== "" && formData.price > 0 && formData.category.trim() !== "" && formData.color.trim() !== ""&& formData.discount.trim() !== ""&& formData.stock.trim() !== "" && formData.description.trim() !== "" && formData.image.trim() !== "") {
            try {
                await updateItem('items', formData.name,formData.category, formData.price,formData.discount,formData.color,formData.stock,formData.description,formData.image, id)
                changeStatus()
                setEditing(false)
            }
            catch (error) {
                alert(error)
            }
        }
        else {
            alert("Por favor completar los campos con datos validos")
        }
    }

    return <div className="item-detail">
        {editing ?
            <form onSubmit={editItem}>
                <label>Nombre</label>
                <input type="text" onChange={handleChange} value={formData.name} name="name" />
                <label>categoria</label>
                <input type="text" onChange={handleChange} value={formData.category} name="category" />
                <label>Precio</label>
                <input type="number" onChange={handleChange} value={formData.price} name="price" />
                <label>descuento</label>
                <input type="number" onChange={handleChange} value={formData.discount} name="discount" />
                <label>color</label>
                <input type="text" onChange={handleChange} value={formData.color} name="color" />
                <label>stock</label>
                <input type="number" onChange={handleChange} value={formData.stock} name="stock" />
                <label>descripcion</label>
                <input type="text" onChange={handleChange} value={formData.description} name="description" />
                <label>imagen</label>
                <input type="text" onChange={handleChange} value={formData.image} name="image" />
                
                <input type="submit" value="Guardar Item" />
            </form>
            :
            <>
                <h3>producto a editar</h3>
                <p>nombre : {name} </p>
                <p>categoria : {category}</p>
                <p>${price}</p>
                <p>descuento: {discount}</p>
                <p>color {color}</p>
                <p>stock : {stock}</p>
                <p>descripcion : {description}</p>



                
                <button onClick={() => setEditing(true)}>EDITAR</button>
                <button onClick={() => removeItem(id)}>BORRAR</button>
            </>}
    </div>

}