import React, { useState } from 'react';

const Product = ({data, updateOrderState}) => {
    // extract data product from prop data
    const {id, name, preparation_time, thumbnail} = data;

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
                </div>
            </div>
        </div>
    )
}

export default Product