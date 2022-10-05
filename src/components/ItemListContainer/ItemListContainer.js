import React, { useState, useEffect } from "react";
import "./ItemListContainer.css"
import { getItem } from "../MockApi/MockApi";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer(props) {

    let [data, setData] = useState([]);

    const {categoryId} = useParams()

    useEffect(() => {
        getItem().then((respuestaDatos) =>
            setData(respuestaDatos)
        );
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

export default ItemListContainer