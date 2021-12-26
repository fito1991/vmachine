import React, { Fragment } from 'react'
import Product from './Product'

const ListProduct = ({dataProduct, updateOrderState}) => {

    // console.log(dataProduct);

    return (
        <Fragment>
            <div className="col s12 m8 l8">            
                <div className="row list-product-container">
                    {dataProduct.map(data => (
                        <Product 
                            key = {data.id}
                            data = {data}
                            updateOrderState = {updateOrderState}
                        />
                    ))}
                </div>
            </div>
        </Fragment>
    )
}

export default ListProduct
