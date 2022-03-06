import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import ItenListContainer from './components/ItenListContainer';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItenListContainer greeting= "bienvenidos a mi sitio" />
    </div>
  );
}

export default App;
