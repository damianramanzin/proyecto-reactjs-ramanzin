import React from "react"
import {useCartContext} from "../../Context/CartContext"
import './NavBar.css';

function CartWidget() {
    const {totalProducts} = useCartContext();
    return (
        <div>
        <img class="cart" src="/assets/cart.png" alt="carrito" />
        <span>{totalProducts() || ""}</span>
        </div>
    );
}

export default CartWidget;


return (
    <div>
    <i className="bi bi-cart2"></i>
    <span>{totalProducts() || ""}</span>
    </div>
);
