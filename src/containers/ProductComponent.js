import React from 'react'
import { useSelector } from 'react-redux';
import { Button, Card, CardContent, CardActions, Container, Grid, Typography, CardActionArea, CardMedia } from '@material-ui/core'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: "100vw",
    height: "100vh",
    padding: theme.spacing(1)

  }
}))

const ProductComponent = () => {
  const classes = useStyles();
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
          <Container className={classes.root} key={id}>
          <Link to={`/product/${id}`}>
            <Grid container spacing={1}>
              <Grid item sm={3}>
                <Card>
                  <CardActionArea>
                    <CardMedia image={image}
                      style={{ height: 400 }} />

                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div" >{title}</Typography>
                      <Typography >$ {price}</Typography>
                      <Typography color="text.secondary"> {category}</Typography>
                    </CardContent>

                  </CardActionArea>
                </Card></Grid>
            </Grid>
            </Link>
          </Container>
         
    );
  });

  return (
    <Container>
    <Card>
      {renderList}
      </Card>
    </Container>
  );
}

export default ProductComponent;
