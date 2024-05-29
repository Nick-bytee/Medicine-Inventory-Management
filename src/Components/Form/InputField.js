import React, { useState } from 'react';

const InputField = ({ onClick }) => {
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');

    const nameChangeHandler = (event) => {
        setName(event.target.value);
    };

    const descChangeHandler = (event) => {
        setDesc(event.target.value);
    };

    const quantityChangeHandler = (event) => {
        setQuantity(event.target.value);
    };

    const priceChangeHandler = (event) => {
        setPrice(event.target.value);
    };

    const handleAddItem = (event) => {
        event.preventDefault();
        if(name.length < 2 || desc.length < 2 || price < 1 || quantity < 1){
            return window.alert('Enter Valid Details')
        }
        const obj = {
            id:Math.floor(Math.random() * 1000) + 1,
            name: name,
            desc: desc,
            price: price,
            quantity: quantity
        };
        onClick(obj);
        // Reset the form fields after submission
        setName('');
        setDesc('');
        setQuantity('');
        setPrice('');
    };

    return (
        <form className='form' onSubmit={handleAddItem}>
            <div>
                <label htmlFor='name'>Name :</label>
                <input value={name} onChange={nameChangeHandler} id='name' className='text-center' type='text' />
            </div>
            <div>
                <label htmlFor='description'>Description :</label>
                <input value={desc} onChange={descChangeHandler} id='description' className='text-center' type='text' />
            </div>
            <div>
                <label htmlFor='quantity'>Quantity :</label>
                <input value={quantity} onChange={quantityChangeHandler} id='quantity' className='text-center' type='number' />
            </div>
            <div>
                <label htmlFor='price'>Price :</label>
                <input id='price' value={price} onChange={priceChangeHandler} className='text-center' type='number' />
            </div>
            <button type='submit'>Add</button>
        </form>
    );
};

export default InputField;
