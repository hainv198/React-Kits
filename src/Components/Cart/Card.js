import React from 'react';
import {useEffect, useState} from "react";


const Cards = ({data, setCart}) => {
    const [products, setProducts] = useState(null);

    useEffect(() => {

            setProducts(data);

            }, [data])

    var shopCart = []
    if (products != null) {
        shopCart = products.map((item) => (
            <div className='products' style={{marginTop: 100}} >
                <img src={item.image} alt="Card image" />
                <div class="card-body" >
                    <p className="card-title">{item.title}</p>
                    <p className="card-text">${item.price}</p>
                </div>

            </div>
        ));
    }

    return (
        <div style={{marginTop:100}}>
            <h1>Tính Tiền Đê</h1>
            {shopCart}
        </div>
    );
};

export default Cards;