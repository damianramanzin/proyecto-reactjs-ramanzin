import React, {useState} from 'react'
import { useCartContext } from '../../Context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";


function ItemDetail(data) {
  const [goToCart, setGoToCart] = useState(false);
  const {addProduct} = useCartContext();

  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(data, quantity);
  }
  
  return (
    <div className="main container">
      <img src={data.img}></img>
      <div>
      <h3>{data.title}</h3>
      <p>{data.detail}</p>
      <h4>${data.price}</h4>
      </div>
      {
        ( goToCart)
        ? <Link to="/Cart/">Finalizar Compra</Link>
        : <ItemCount initial={1} stock={5} onAddToCart={onAdd}/>
      }
    </div>
  );
}

export default ItemDetail;