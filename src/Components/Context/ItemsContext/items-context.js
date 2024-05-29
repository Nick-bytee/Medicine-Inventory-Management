import React from 'react'

const ItemsContext = React.createContext({
    items : [],
    addItems : (item) => {},
})

export default ItemsContext