import { Container, Grid, makeStyles, Paper } from '@material-ui/core';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import productApi from 'api/productApi';
import React, { useEffect } from 'react';
import { useState } from 'react';
import ProductSkeletonList from '../components/ProductSkeletonList';
import ProductList from '../components/ProductList';
// material ui styles
const useStyle = makeStyles(theme => ({
    root : {

    },
    left : {
        width : "250px",
    },
    right : {
        flex : "1 1 0" ,
    },

}));
function ListPage(props) {
    const classes = useStyle();
    const [productList , setProductList] = useState([]) ;
    const [loading , setLoading] = useState(true) ;

    useEffect(() =>{
        (async () =>{
            try {
                const {data} = await productApi.getAll({_page:1,_limit:10});
                setProductList(data) ;
            } catch (error) {
                console.log("Failed to fetch product list :" , error);
            }
            setLoading(false);
        })();
    },[]);
    return (
        <Box>
            <Container>
                <Grid container spacing={2} >
                    <Grid item className={classes.left}>
                        <Paper elevation={0}>
                            Left column
                        </Paper>
                    </Grid>
                    <Grid item className={classes.right}>
                        <Paper elevation={0} >
                        {console.log({productList})}
                            {loading ? <ProductSkeletonList /> : <ProductList data={productList} />}
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default ListPage;