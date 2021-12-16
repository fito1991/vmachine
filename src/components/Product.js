import React, { useState } from 'react';
import useCountDown from "react-countdown-hook";
import Order from './Order';

const Product = ({data}) => {
    // extract data product from prop data
    const {id, name, preparation_time, thumbnail} = data;

    // countdown
    const [timeLeft, actions] = useCountDown(preparation_time * 1000, 100);

    // Order state
    const [order, setOrder] = useState([]);

    // Update Order State
    const updateOrderState = e => {
        actions.start();
        setOrder({
            ...order,
            [e.target.name] : e.target.value
        });
    }

    // Create Orders List


    // Extract values from Order
    const nameOrder = order;

    return (
        <div className="col s12 m4 l4">
            <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                    <img src={thumbnail} alt={name} className="img-product" />
                    <span className="card-title truncate">{name}</span>
                    <p>Preparation time: {preparation_time} seconds</p>
                </div>
                <div className="card-action">
                    <button 
                        className='btn' 
                        onClick={updateOrderState}
                        name='nameOrder'
                        value={name}
                    >Order</button>
                    <p className='white-text'>Remaining: {(timeLeft / 1000).toFixed(0) == 0 ? '-' : `${(timeLeft / 1000).toFixed(0)} seconds`}
                    </p>
                </div>
            </div>
            {/* <Order
                order = {order}
            /> */}
        </div>
    )
}

export default Product