import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import CartWidget from './components/Navbar/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={
      <ItemListContainer greeting="¡Bienvenido a Librosonline!" />
      }/>
      <Route path="/ruta2" element={
      <ItemDetail />
      }/>
      </Routes>
      <ItemCount/>
      </BrowserRouter>
    </div>
  );
}
 
export default App;
