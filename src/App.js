import React, { useState, useEffect, useRef } from 'react';
import ListProduct from './components/ListProduct';
import Order from './components/Order';
import Product from './components/Product';
import Spinner from './components/Spinner';

function App() {

  // State

  const [products, setProducts] = useState(true);
  const [error, setError] = useState(false);
  const [result, setResult] = useState([]);

  // Order state
  const [order, setOrder] = useState([]);

  // group detail order
  const [list, setLists] = useState([]);

  // Update Order State
  const updateOrderState = (e, tmr) => {
      setOrder([
        ...order,
        {
          name: e.target.value,
          time: parseInt(tmr)
        }
      ]);
  } 



  // consult API
  
  useEffect(() => {
    const responseAPI = () => {
      
      const url = 'https://vending-machine-test.vercel.app/api/products';
      
      fetch(url)
      .then(response => {
        if(response.status >= 200 && response.status < 300){
          console.log(response.status);
          return response.json();
        }else{
          console.log(response.status);
          setError(true);
        }
      })
      .then(jsonProduct => {
        setResult(jsonProduct.data);
        setTimeout(() => {
          setProducts(false);
        }, 1500);
      })
      
    }
    
    responseAPI();
  }, [])

  
  // Load component if the response API return error
  let allProducts;
  if (error) {
    allProducts = <h4>Oops! Houston we have a problem</h4> ;
  }else{
    allProducts = <ListProduct dataProduct={result} updateOrderState={updateOrderState}/> ;
  }

  return (
    <div className="App">
      <h2 className='center'>Vending Machine</h2>
      <div className="row">
        <div className="col s12 m4 l4 order">
          { order == '' ? <h5>No Orders</h5> : <h5>Pending Orders</h5> }
          <Order order={order}/>
        </div>
        { products ? <Spinner/> : allProducts }
      </div>
    </div>
  );
}

export default App;
