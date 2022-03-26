import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import "./components/Item/Item.css";
import "./components/ItemDetail/ItemDetail.css";


import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { ItemCount } from "./components/ItemCount";
import ProductListContainer from "./components/ProductListContainer";
import Destacados from "./components/Destacados/Destacados";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />}/>
          <Route path="/Cart" element={<ItemCount initialStock={5} initial={1} />}/>
          <Route path="/detail/:id" element={<ItemDetailContainer  />}/>
          <Route path="/categoria/:id" element={<ItemListContainer />}/>
          <Route path="/productos" element={<ProductListContainer/>}/>
          <Route path="/favoritos" element={<Destacados/>}/>



        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
