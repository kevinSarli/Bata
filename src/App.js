import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import ItenListContainer from './components/ItenListContainer';
import { ItemCount } from './components/ItemCount';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItenListContainer greeting= "bienvenidos a mi sitio" />
      <ItemCount initialStock={5} initial={1} />
    </div>
  );
}

export default App;
