import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
    const [items, setItems] = useState([])

    const addToCartHandler = (item) => {
        const itemId = item[0].id
        console.log(item)
        const itemIndex = items.findIndex(item => item.id === itemId)
        if (itemIndex !== -1) {
            const updatedItems = [...items];
            updatedItems[itemIndex].quantity += 1;
            setItems(updatedItems);
        } else {
            const updatedItem = {...item[0], quantity: 1}
            console.log(updatedItem)
            setItems((prevItems) => [...prevItems, updatedItem])
        }

    }

    const removeFromCartHandler = (id) => {
        const filteredItems = items.filter((item) => item.id !== id)
        const itemIndex = items.findIndex(item => item.id === id)
        if(items[itemIndex].quantity > 1 && itemIndex !== -1){
            const updatedItems = [...items];
            updatedItems[itemIndex].quantity -=1
            setItems(updatedItems)
        }else{
            setItems(filteredItems)
        }
        
    }

    const orderHandler = () => {
        const items = []
        setItems(items)
        window.alert('Order Successful')
    }

    const increaseQuantity  = (id) => {
        const itemIndex = items.findIndex(item => item.id === id)
        const updatedItems = [...items]
        updatedItems[itemIndex].quantity +=1
        setItems(updatedItems)
    }

    const cartContext = {
        items: items,
        totalAmount: 0,
        addItems: addToCartHandler,
        removeItems: removeFromCartHandler,
        order : orderHandler,
        increaseQuantity : increaseQuantity
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider