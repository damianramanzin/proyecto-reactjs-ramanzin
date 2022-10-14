import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getSingleItem } from "../MockApi/MockApi";
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import { useParams } from 'react-router-dom';



function ItemDetailContainer() {
  const [data, setData] = useState({});
  const {id}= useParams() ;

  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, "productos", id);
    getDoc(queryDoc)
    .then(res => setData({id: res.id, ...res.data()}))
  }, [id])
  return (
    <div>
      <div className="main container"></div>
      <div>
        <ItemDetail {...data} />
      </div>
    </div>
  );
}

export default ItemDetailContainer;