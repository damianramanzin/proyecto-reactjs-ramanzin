import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getSingleItem } from "../MockApi/MockApi";
import { useParams } from 'react-router-dom';



function ItemDetailContainer() {
  const [item, setItem] = useState({});

const { itemId } = useParams(); 

  useEffect(() => {
    getSingleItem(itemId).then((respuestaDatos) => setItem(respuestaDatos));
  }, [itemId]);

  
  return (
    <div>
      <div className="detail__container">
        <ItemDetail item={item}
        />
      </div>
    </div>
  );
}

export default ItemDetailContainer;