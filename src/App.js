import "./App.css";
import "./components/Item/Item.css";
import "./components/ItemDetail/ItemDetail.css";
import { Provider } from "react-redux";
import { store } from "./store";

import "bootstrap/dist/css/bootstrap.min.css";

import CartContextProvider from "./context/CartContext";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <CartContextProvider>
      <Provider store={store}>

      <AppRouter/>
      </Provider>
    </CartContextProvider>
  );
}

export default App;
