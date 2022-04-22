import {  createUserWithEmailAndPassword,getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { types } from "../types";
import { googleAuthProvider } from "../firebase/config";



export const startRegisterWithEmailPasswordName = (email, password, name) => {
    return (dispatch) => {
        createUserWithEmailAndPassword(getAuth(), email, password)
            .then(  ({user}) => {
                console.log(user);
                user.displayName = name
                dispatch(login(user.uid,user.displayName))
                
                
            })
            .catch(error => console.log(error))
    }
}


export const startLoginEmailPass = (email,password)=>{
    return (dispatch)=>{
        signInWithEmailAndPassword(getAuth(),email,password)
        .then(({user})=>{
            dispatch(login(user.uid,user.displayName))
        })
    }
}

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
})

export const startGoogleLogin = ()=>{
    return (dispatch)=>{
        signInWithPopup(getAuth(),googleAuthProvider)
            .then(({user})=>{
                dispatch(login(user.uid,user.displayName))
        })
    }
}


export const startLogout = () =>{
    return (dispatch)=>{
        signOut(getAuth())
        .then(()=>{
            dispatch(logout())
        })
    }
}

export const logout = ()=> ({type: types.logout})


