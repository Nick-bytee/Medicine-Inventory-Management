import React from 'react'

const CartContext = React.createContext({
    items : [],
    totalAmount : 0,
    addItems : (item) => {},
    removeItems : (id) => {},
    order : () => {},
    increaseQuantity : (id) => {}
})

export default CartContext