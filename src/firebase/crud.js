import { addDoc, setDoc, deleteDoc, collection, getDocs, getDoc, doc } from "firebase/firestore";
import {db} from '../firebase/config'

export const addItem = async (collectionName, name,category, price,discount,color,stock,description,image) => {
    try {
        await addDoc(collection(db, collectionName), {  name,category, price,discount,color,stock,description,image })
    }
    catch (e) {
        throw new Error(e)
    }
}

export const getItems = async (collectionName) => {
    const getCollection = collection(db, collectionName)

    try {
        const itemsCollection = await getDocs(getCollection)
        const restructuredItems = itemsCollection.docs.map(item => {
            return { ...item.data(), id: item.id }
        })

        return restructuredItems
    }
    catch (e) {
        throw new Error(e)
    }
}

export const updateItem = async (collectionName,  name,category, price,discount,color,stock,description,image, id) => {
    try {
        await setDoc(doc(db, collectionName, id), {  name,category, price,discount,color,stock,description,image })
    }
    catch (e) {
        throw new Error(e)
    }
}

export const deleteItem = async (collectionName, id) => {
    try {
        await deleteDoc(doc(db, collectionName, id));
    }
    catch (e) {
        throw new Error(e)
    }
}
