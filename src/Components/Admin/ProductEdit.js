import React, {useEffect, useState} from 'react';
import Table from "react-bootstrap/Table";
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import BasicRating from "../Atom/Ratting";
import {Link} from 'react-router-dom'
import {Button} from "@mui/material";
import AnnouncementIcon from '@mui/icons-material/Announcement';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
const ProductEdit = (props) => {

    const [products, setProducts] = useState(null);

    useEffect(() =>
        {
            setProducts(props.data);
        }, [props.data]
    )

    var products_list = [];
    if (products != null) {
        products_list = products.map((item) =>
            (

                <tr key={item.id}  style={{
                    width:'100%',
                    textAlign:"center",
                    margin:'auto 0',
                    textOverflow: "ellipsis"
                }}>
                    <td>{item.id}</td>
                    <td>
                        <img src={item.image} style={{width: '100%'}}></img>
                    </td>
                    <td>{item.title}</td>
                    <td>${item.price}</td>
                    <td>{item.description}</td>
                    <td>{item.category}</td>
                    {/*<td>{item.rating.count}</td>*/}
                    {item.rating.count > 150 && (
                        <td>
                            <Button variant="contained" color="success" startIcon={< AssignmentTurnedInIcon/>}>
                                Stocking
                            </Button>
                        </td>
                    )}
                    {item.rating.count < 150 && (
                        <td>
                            <Button variant="contained" color="error"  startIcon={< AnnouncementIcon/>}>effete
                            </Button>
                        </td>
                    )}
                    {item.price > 0 && (
                        <td>{item.price}</td>
                    )}
                    {item.price === 0 && (
                        <td>{item.price}</td>
                    )}
                    {item.rating.rate <3 && (
                        <td >{item.rating.rate}</td>
                    ) }
                    {item.rating.rate > 3 && (
                        <td >{item.rating.rate}<BasicRating/></td>
                    ) }
                    {item.rating.rate === 0 && (
                        <td ><BasicRating/></td>
                    ) }
                    {item.rating.rate === null && (
                        <td ><BasicRating/></td>
                    ) }

                    <td>
                        <button type="button" className="btn btn-primary">
                            <Link to={`/edit/${item.id}`} style={{color:'white'}}><AutoFixHighIcon/></Link>
                        </button>
                        <button type="button" className="btn btn-danger">
                            <DeleteForeverIcon/>
                        </button>
                    </td>
                </tr>
            )
        );
    }
    return (
        <div style={{marginTop:100}} className='container'>
            <Table striped bordered hover style={{width:'80%'}}>
                <thead>
                <tr>
                    <th>STT</th>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price </th>
                    <th>Description </th>
                    <th>Category</th>
                    <th>Status</th>
                    <th>Condition</th>
                    <th>Rating</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {products_list}
                </tbody>
            </Table>

        </div>
    );
};

export default ProductEdit;