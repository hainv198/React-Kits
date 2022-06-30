import './layout.css'
import {useEffect, useState} from "react";
import React from "react";

import Products from "../Layout/Products";
import Cards from "../Components/Cart/Card";
import Banner from "../Components/Cart/Banner";
function GridExample() {

    const [products, setProducts] = useState(null);
    const [cart, setCart] = useState([])
    const [show, setShow] = useState(true)
    useEffect(() => {
        console.log('app useeffect!!');
        let url = 'https://fakestoreapi.com/products/';
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
            });
    }, []);
    const handleClick = (products) => {
        let data = [...products]
        if (cart.indexOf(products) !== -1) return;
        setCart([...data, products]);
        console.log('data cart')
    };

    const handleChange = (products, d) => {
        const ind = cart.indexOf(products);
        const arr = cart;
        arr[ind].amount += d;

        if (arr[ind].amount === 0) arr[ind].amount = 1;
        setCart([...arr]);
    };

    return (
        <div>
           <Banner size={cart.length} setShow={setShow}/>
            {show ? (
                <Products data={products} hanldeClick={handleClick}/>
            ) : (
                <Cards cart={cart} setCart={setCart} handleChange={handleChange} />
            )}
        </div>
    );
}
export default GridExample;

