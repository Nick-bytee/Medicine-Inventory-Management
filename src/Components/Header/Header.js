import React from 'react'
import './Header.css'
import CartButton from './CartButton/CartButton'

const Header = () => {
  return (
    <div className='header'>
        <h2>Inventory Manager</h2>
        <CartButton/>
    </div>
  )
}

export default Header