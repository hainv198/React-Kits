import React, {createContext, useState} from 'react';
import {useEffect} from "/react";

// khoi tao context

const ProductSContext = createContext();


const ContextCart = ({children}) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        console.log('app useeffect!!');
        let url = 'https://fakestoreapi.com/products/';
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
                console.log(setProducts(data))
            });
    }, []);

    return (
        <ProductSContext.Provider value={products} >
            {children}
        </ProductSContext.Provider>
    );
};

export default ContextCart;