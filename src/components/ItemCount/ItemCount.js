import React , { useState } from 'react';
import Button from 'react-bootstrap/Button';

export const ItemCount = ({ initial, stock, onAddToCart}) => {
    const [count, setCount] = useState(initial);

    const add = () =>{
        setCount(count + 1);
    }
    const substract = () =>{
        setCount(count - 1);
    }
    
return (
    <div className="counter">
        <Button variant="outline-dark"  disabled={count <= 1} onClick={add}>
        {" "}
        -{" "}
        </Button>
        <span> {count} </span>
        <Button variant="outline-dark"  disabled={count >= stock} onClick={substract}>
        {" "}
        +{" "}
        </Button>
        <div className="btnAgregarCarrito">
        <Button variant="outline-dark" disabled={stock <=0} onClick={() =>onAddToCart (count)}>Agregar al carrito</Button>{" "}
        </div>
    </div>
);

}

export default ItemCount;