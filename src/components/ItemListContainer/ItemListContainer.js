import React, { useState, useEffect } from "react";
import "./ItemListContainer.css"
import getItems from "../ItemsData/ItemsData";
import ItemList from "../ItemList/ItemList";

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

export default ItemListContainer