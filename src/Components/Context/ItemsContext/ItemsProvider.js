import React, { useState } from "react";
import ItemsContext from "./items-context";

const ItemsProvider = (props) => {
    const [items, setItems] = useState([])

    const addItemsHandler = (item) => {
        setItems((prevItems) => [...prevItems, item])
    }
    
    const itemsContext = {
        items : items,
        totalAmount : 0,
        addItems: addItemsHandler,
    }

    return (
        <ItemsContext.Provider value={itemsContext}>
            {props.children}
        </ItemsContext.Provider>
    )
}

export default ItemsProvider