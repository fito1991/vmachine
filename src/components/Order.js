import React from 'react'

const Order = ({order}) => {
    return (
        <div className="order">
            <p>name: <span>{order.nameOrder}</span></p>
        </div>
    )
}

export default Order
