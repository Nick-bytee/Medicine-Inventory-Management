import React, { useContext, useState, useEffect } from 'react'
import Backdrop from '../Backdrop/Backdrop'
import './CartModal.css'
import { createPortal } from 'react-dom'
import { Button } from 'react-bootstrap'
import CartContext from '../Context/CartContext/cart-context'

const CartModal = (props) => {
    const cartProvider = useContext(CartContext)
    const [total, setTotal] = useState(0)
    
    const removeItemHandler = (id) => {
        cartProvider.removeItems(id)
    }

    const orderHandler = () => {
        cartProvider.order()
    }

    useEffect(() => {
        let totalPrice = 0;
        cartProvider.items.forEach(item => {
            totalPrice += parseInt(item.price);
        });
        setTotal(totalPrice);
    }, [cartProvider.items]);

    const modal = (
        <React.Fragment>
        <Backdrop/>
        <div className='modals'>
            <ul style={{margin : '0', padding : '0'}}>
            {cartProvider.items.map((item) => {
                return (<>
                <li className='cart-item' id={item.id} key={item.id}>
                    <div className='content'>
                        <h5>{item.name}</h5>
                        <p>{item.price}</p>
                    </div>
                    <div className='qty'>
                        <p>{`x${item.quantity}`}</p>
                    </div>
                    <div>
                        <Button className='qty-button1'>+</Button>
                        <Button onClick={() => removeItemHandler(item.id)} className='qty-button2'>-</Button>
                    </div>
                </li>
                <hr/>
                </>
            )
                
        })}
            </ul>
            <div className='d-flex justify-content-between'>
                <h5 style={{fontWeight : 'bold'}}>Total Amount</h5>
                <h5 style={{fontWeight : 'bold'}}>{total}</h5>
            </div>
        <footer>
            <div>
                <button onClick={props.onClose}>Close</button>
                {cartProvider.items.length > 0 ? <button className='order-button' onClick={orderHandler}>Order</button> : ''}
            </div>
        </footer>
    </div>
    </React.Fragment>
    )
  return (
    createPortal(modal, document.getElementById('overlays'))
  )
}

export default CartModal