import React from "react";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import ItemsProvider from "./Components/Context/ItemsContext/ItemsProvider";
import CartProvider from './Components/Context/CartContext/CartProvider'

function App() {
  return (
    <ItemsProvider>
      <CartProvider>
        <div className="App">
          <Header />
          <Form />
          <Content />
        </div>
      </CartProvider>
    </ItemsProvider>

  );
}

export default App;
