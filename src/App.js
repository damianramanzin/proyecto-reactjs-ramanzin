import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'; 
import ItemCount from './components/ItemCount/ItemCount';
import CartWidget from './components/Navbar/CartWidget';
import CartProvider from "./Context/CartContext";
import { BrowserRouter, Routes, Route, } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
          <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a Librosonline!" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/detail/:itemId"  element={<ItemDetailContainer />} />
          <Route path="/Contacto" element={<h1> Contacto</h1>} />
          </Routes>
          <ItemCount />
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
