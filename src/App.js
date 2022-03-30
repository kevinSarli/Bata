import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import "./components/Item/Item.css";
import "./components/ItemDetail/ItemDetail.css";


import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ProductListContainer from "./components/ProductListContainer";
import Destacados from "./components/Destacados/Destacados";
import CartContextProvider from "./context/CartContext";
import Cart from "./components/Cart";

function App() {
  //console.log(CartContext)
  return (
    <BrowserRouter>
    <CartContextProvider>
      
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />}/>
          <Route path="/Cart" element={<Cart/>}/>
          <Route path="/detail/:id" element={<ItemDetailContainer  />}/>
          <Route path="/categoria/:id" element={<ItemListContainer />}/>
          <Route path="/productos" element={<ProductListContainer/>}/>
          <Route path="/favoritos" element={<Destacados/>}/>



        </Routes>
      </div>
    </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
