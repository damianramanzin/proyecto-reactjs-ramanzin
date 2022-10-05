import React from 'react'
import { Link } from "react-router-dom";
import ItemCount from '../ItemCount/ItemCount';

function Item({ id, price, title , img , detail }) {

    return (
    <div className='item'>
        <div className='item--title'>
            <h3>{title}</h3>
        </div>
        <div className='item--img'>
            <img src={img} alt="libro" />
        </div>
        <div className="item--details">
            <h4>$ {price}</h4>
        <p>{detail}</p>
        </div>
        <Link to={`/detalle/${id}`}>ver detalle</Link>
    </div>
    )
}

export default Item

