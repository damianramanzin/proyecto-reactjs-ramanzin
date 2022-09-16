import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import CartWidget from './components/Navbar/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <CartWidget />
      <ItemListContainer greeting="¡Bienvenido a Librosonline!" />
    </div>
  );
}

export default App;
