import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getItem } from "../MockApi/MockApi";
import { useParams } from 'react-router-dom';



function ItemDetailContainer() {
  let [item, setItem] = useState({});

  console.log("params", useParams())


const { itemId } = useParams(); 

  useEffect(() => {
    getItem(itemId).then((respuestaDatos) => setItem(respuestaDatos));
  }, [itemId]);

  
  return (
    <div>
      <div className="detail__container">
        <ItemDetail 
                key={item.id}
                title={item.title}
                price={item.price}
                detail={item.detail}
                img={item.img}
        />
      </div>
    </div>
  );
}

export default ItemDetailContainer;