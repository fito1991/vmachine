import React, {Fragment} from 'react'
import ElementOrder from './ElementOrder';

const Order = ({order}) => {
    return (
        order.map(orderData => (
            <ElementOrder
                key = {Math.floor(Math.random() * 999999) + 1}
                detail={orderData}
            />
        ))
    )
}

export default Order
