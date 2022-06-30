import React, {useEffect, useState} from 'react';
import {Button, Stack} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import {Link} from "react-router-dom";
import DetailsIcon from "@mui/icons-material/Details";

const Products = ({data,hanldeClick}) => {

    const [products, setProducts] = useState(null);
    useEffect(() => {
            setProducts(data);
        }, [data])

    var products_jsx = [];
    if (products != null) {
        products_jsx = products.map((item) => (
            <div class="card col-sm-4" className='products'  style={{padding:'10px 0', margin:'20px 0', width:'30%', height:400}}>
                <img class="card-img-top mt-3" src={item.image} alt="Card image" />
                <div class="card-body" >
                    <div >
                        <b >
                            <p className="card-title">{item.title}</p>
                        </b>
                        <p className="card-text">${item.price}</p>
                    </div>
                    <Stack direction="row" spacing={2} display='flex' justifyContent='space-between'>
                        <Button variant="outlined"
                                startIcon={<AddShoppingCartIcon />}
                                onClick={hanldeClick}
                        >
                            {/*<Link to={`/products/cart/${item.id}`} >Buy</Link>*/}
                        </Button>
                        <Button variant="outlined" endIcon={<DetailsIcon />}>
                            <Link style={{color:'while'}} to={`/products/${item.id}`}>Details</Link>
                        </Button>
                    </Stack>
                </div>

            </div>
        ));
    }
    return(
        <>
            <div className="container  ">
                <div className="row card-deck "
                     style={{display: 'flex',
                         justifyContent: 'space-between'
                }}
                >
                    {products_jsx}
                </div>
            </div>
        </>
    )
};

export default Products;