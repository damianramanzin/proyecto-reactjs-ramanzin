import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'; 
import ItemCount from './components/ItemCount/ItemCount';
import { BrowserRouter, Routes, Route, } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/Home/:" element={<ItemListContainer greeting="¡Bienvenido a Librosonline!" />} />
        <Route path="/categoria/:libros" element={<ItemListContainer />}></Route>
        <Route path="/detalle/:itemId"  element={<ItemDetailContainer />} />
        <Route path="/Contacto/:" element={ <h1> Contacto</h1>}/>
      </Routes>
      <ItemCount/>
      </BrowserRouter>
    </div>
  );
}

export default App;
