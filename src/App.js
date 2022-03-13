import './App.css';
import "./components/Item/Item.css"

import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import Item from "./components/Item/Item"
import ItemListContainer from './components/ItemListContainer';
//import { ItemCount } from './components/ItemCount';
//<ItemCount initialStock={5} initial={1} />

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer/>

    </div>
  );
}

export default App;
