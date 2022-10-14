import React, { useState, useEffect } from "react";
import Item from "../Item/Item";
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'
import "./tienda.css"
import {useParams} from "react-router-dom"

function Tienda(props) {
    const [data, setData] = useState([]);
    const {cat} = useParams();

    useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "productos");
        if (cat){
            const queryFilter = query(queryCollection, where("category,", "==", cat))
            getDocs(queryFilter)
                .then(res => setData(res.docs.map(productos =>({id: productos.id, ...productos.data()}))))
            } else {
            getDocs(queryCollection)
                .then(res => setData(res.docs.map(productos =>({id: productos.id, ...productos.data()}))))
            }
    }, []);
}

function Itemlist(props) {
    return (
        <div>
            {props.data.map((item) => {
                return (
                    <Item
                        key={item.id}
                        price={item.price}
                        title={item.title}
                        img={item.img}
                        detail={item.detail}
                    />
                );
            })}
        </div>
    )
}

export default Itemlist