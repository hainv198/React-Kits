import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from "react-router-dom";
const Banner = ({ setShow, size }) => {
    return (
        <div  style={{marginTop:100, display:'flex', justifyContent:'space-between'}}>
                <span className="my_shop" onClick={() => setShow(true)}>
                  My Shoping
                </span>
                <p onClick={() => setShow(false)}>
                    <Link to='/card'>
                      <ShoppingCartIcon/>
                    </Link>
                    <span>{size}</span>
                </p>
        </div>
    );
};

export default Banner;