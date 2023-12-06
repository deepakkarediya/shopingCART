import { Provider } from "react-redux";
import { store } from "./app/store";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <ProductList />
      </div>
      <Cart />
    </Provider>
  );
}

export default App;
