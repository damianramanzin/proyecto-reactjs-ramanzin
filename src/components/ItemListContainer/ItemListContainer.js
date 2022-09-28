import React, { useState, useEffect } from "react";
import "./ItemListContainer.css"
import getItems from "../ItemDetail/ItemDetail";
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';

function ItemListContainer(props) {

    let [data, setData] = useState([]);
    useEffect(() => {
        getItems().then((respuestaDatos) => setData(respuestaDatos));
    }, []);

return (
    <div>
        <h1 className='title'>{props.greeting}</h1>
        <div className="container">
            <ItemList data={data}/>
        </div>
    </div>
    )
}

const {id} = useParams();

export default ItemListContainer