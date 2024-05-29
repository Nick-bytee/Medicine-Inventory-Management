import React, {useContext, useState} from 'react'
import { FaCartPlus } from "react-icons/fa";
import './CartButton.css'
import CartModal from '../../Modal/CartModal';
import CartContext from '../../Context/CartContext/cart-context';

const CartButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  const cartContext = useContext(CartContext)

  const cartCloseHandler = () => {
    setIsOpen(false)
  }

  return (
    <React.Fragment>
      <div onClick={() => {setIsOpen(true)}} className='cart-button'>
            <FaCartPlus className='m-2' style={{color:'white'}}/>
            <p className='m-2 p-0' style={{fontWeight : 'bold', color : 'white'}}>Your Cart</p>
            <div className='cart-items'>
                <p>{cartContext.items.length}</p>
            </div>
        </div>
        {isOpen ? <CartModal onClose={cartCloseHandler}/> : ''}
    </React.Fragment>
    
  )
}

export default CartButton