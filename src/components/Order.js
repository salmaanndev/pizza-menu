import React from 'react'

const Order = () => {
    return (
        <div className='order'>
            <h4>{new Date().toLocaleTimeString()}.We're Currently Open!</h4>
            <button className='btn'>Order</button>
        </div>
    )
}

export default Order
