import React, { useState } from 'react';
// import useCountDown from "react-countdown-hook";
// import useCountdown from "@bradgarropy/use-countdown";

const Product = ({data, updateOrderState}) => {
    // extract data product from prop data
    const {id, name, preparation_time, thumbnail} = data;

    // countdown
    // const [timeLeft, actions] = useCountDown(preparation_time * 1000, 100);

    // const remaining = (timeLeft / 1000).toFixed(0) == 0 ? '-' : `${(timeLeft / 1000).toFixed(0)} seconds`;
    // const timer = (timeLeft / 1000).toFixed(0) == 0 ? preparation_time : `${(timeLeft / 1000).toFixed(0)}`;

    // Create Orders List
    const [orders, setOrders] = useState([]);

    // Update list orders
    const updateListOrders = e => {
        setOrders({
            ...orders,
            [e.target.name] : e.target.value
        })
    }

    return (
        <div className="col s12 m6 l4">
            <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                    <img src={thumbnail} alt={name} className="img-product" />
                    <span className="card-title truncate">{name}</span>
                    <p>Preparation time: {preparation_time} seconds</p>
                </div>
                <div className="card-action">
                    <button 
                        className='btn' 
                        onClick={(e) => {updateOrderState(e, preparation_time);}} //{updateOrderState(); actions.start();}
                        name='nameOrder'
                        value={name}
                        data-sec={preparation_time}
                    >Order</button>
                    <input type="hidden" name="currentTime" value={preparation_time} />
                    {/* <p className='white-text'>Remaining: {remaining}
                    </p> */}
                </div>
            </div>
        </div>
    )
}

export default Product