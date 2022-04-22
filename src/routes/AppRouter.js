import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState,useEffect } from "react";

import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Cart from "../pages/Cart";
import { NavBar } from "../components/NavBar";
import ItemListContainer from "../pages/ItemListContainer";
import ItemDetailContainer from "../pages/ItemDetailContainer";
import Destacados from "../pages/Destacados/Destacados";
import AuthRoutes from "./AuthRoutes";
import Login from '../pages/Login'
import { LoadingProvider } from "../context/LoadingContext";
import { Admin } from "../pages/Admin";

function AppRouter() {

  const [isLogged,setIsLogged] =useState(false)

  useEffect(()=>{

    onAuthStateChanged(getAuth(),user=>{
      if(user?.uid){
        setIsLogged(true)
      }else{
        setIsLogged(false)
      }
    })
  },[isLogged])

  const [isLoggedAdmin,setIsLoggedAdmin] =useState(false)

  useEffect(()=>{

    onAuthStateChanged(getAuth(),user=>{
      if(user?.uid === "IWxR0vcyVWYOpH8sJW99jzDAUtK2"){
        setIsLoggedAdmin(true)
      }else{
        setIsLoggedAdmin(false)
      }
    })
  },[isLoggedAdmin])
  return (
    <BrowserRouter>
      
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/Cart" element={<Cart/>}/>
          <Route path="/detail/:id" element={<ItemDetailContainer/>}/>
          <Route path="/categoria/:id" element={<ItemListContainer />}/>
          <Route path="/favoritos" 
          element={
          isLogged
          ?<Destacados/>
          :<Login/>
        }
          />



          <Route path="/admin" 
          element={
          isLoggedAdmin
          ?<LoadingProvider>  <Admin/>  </LoadingProvider>
          :<h2>No tienes derecho de administrador</h2>
        }
          />




          <Route path="/auth/*" element={
          !isLogged 
          ?<AuthRoutes/>
        : <ItemListContainer/>
        }/>





        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;
