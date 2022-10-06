import React,{useState} from 'react'


export const ItemCount = ({initial ,stock, onAddToCart}) => {
const [count, setCount] = useState(initial);

const add = () =>{
    setCount(count + 1);
}
const subtract = () =>{
    setCount(count - 1);
}
return (
    <div className='counter'>
        <button disabled={count <= 1} onClick={subtract}>-</button>
        <span>{count}</span>
        <button disabled={count >= stock} onClick={add}>+</button>
        <div>
        <button disabled={stock <= 0} onClick={() => onAddToCart (count)}>Agregar al carrito</button>
        </div>
    </div>
);
}

export default ItemCount;