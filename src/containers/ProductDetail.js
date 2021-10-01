import React,{ useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct, removeSelectedProduct } from '../redux/actions/productActions';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { Description } from '@material-ui/icons';


const ProductDetail = () => {
    const product = useSelector((state) => state.product);
    const { title, image, price, category, description } = product; 

    const { productId } = useParams();
    const dispatch = useDispatch();
    console.log(product);

    const fetchProductDetail = async () => {
        const response = await axios
        .get(`https://fakestoreapi.com/products/${productId}`)
        .catch(err => {
            console.log("Err", err);

        });
        dispatch(selectedProduct(response.data));
    };
    useEffect(() => {
        if(productId && productId !== "") fetchProductDetail();
        return () => {
          dispatch(removeSelectedProduct());
        }
    }, [productId]);
    
    return (
        <div>
        {Object.keys(product).length === 0 ? ( 
          <div>...Loading</div>
        ): (
          <div>
        <Card 
        style={{
          maxWidth: 400,
          marginLeft: "100px", 
          boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
          backgroundColor: "#fafafa",
        }}
      >
        <CardMedia image={image}
        alt={title} 
        style={{ height: "400px" }} />
        <CardContent>
        <Typography  variant="h5" component="div" >{category}</Typography>
        <Typography >$ {price}</Typography>
          </CardContent>
      </Card>
     
      <Card 
        style={{
          maxWidth: 450,
          marginLeft: "520px", 
          marginTop: "-450px",
          boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
          backgroundColor: "#fafafa" }}>   
        <CardContent>
        <Typography  variant="h5" component="div" >{title}</Typography>
        <Typography >$ {price}</Typography>
        <Button variant="contained" > {category}</Button>
        <Typography  color="text.primary"> {description}</Typography>
        </CardContent>
        <Button color="secondary"  variant="contained">Add to cart</Button>
          <br></br>
          <br></br>
        </Card>
        </div>
      )
    }
        </div>
    )
}

export default ProductDetail;
