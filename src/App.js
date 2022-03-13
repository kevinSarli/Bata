import './App.css';
import "./components/Item/Item.css"

import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { ItemCount } from './components/ItemCount';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer/>
      <ItemCount initialStock={5} initial={1} />

      <ItemDetailContainer/>

    </div>
  );
}

export default App;
