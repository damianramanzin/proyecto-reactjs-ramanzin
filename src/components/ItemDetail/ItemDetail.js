import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";


const ItemDetail = ({ price, title , img , detail }) => {
  let estadoCart = true;

  const onAddToCart = (quantity) => {
    alert(`agregaste al carrito ${quantity} productos!`);
}
  
return (
  <div className="card">
    <div className="card-img">
      <div> </div>
    </div>
    <div className="card-detail">
      <h3> {title} </h3>
      <p> {detail} </p>
      <h4> $ {price} </h4>

      {estadoCart === false ? (
        <ItemCount initial={1} stock={10} onAddToCart={onAddToCart} />
      ) : (
        <Link to="/Cart/">
          <Button variant="outline-dark">Finalizar Compra</Button>
        </Link>
      )}
    </div>
  </div>
);
}

export default ItemDetail
