import { Container, Grid, makeStyles, Paper } from '@material-ui/core';
import { Pagination } from '@mui/material';
import { Box } from '@mui/system';
import productApi from 'api/productApi';
import { useEffect, useState } from 'react';
import queryString from 'query-string';
import { useHistory, useLocation } from 'react-router-dom';
import FilterViewer from '../components/FilterViewer';
import ProductFilter from '../components/ProductFilter';
import ProductList from '../components/ProductList';
import ProductSkeletonList from '../components/ProductSkeletonList';
import ProductSort from '../components/ProductSort';
import { useMemo } from 'react';

// material ui styles
const useStyles = makeStyles(theme => ({
    root: {

    },
    left: {
        width: '250px',
    },
    right: {
        flex: '1 1 0',
    },
    pagination : {
        display : 'flex' , 
        flexFlow : 'row nowrap',
        justifyContent: 'center',
        marginTop:'20px', // kc 2 element
        paddingBottom:'20px' ,//kc element con va cha
        
    },
}));
function ListPage(props) {
    const classes = useStyles();

    const history = useHistory();
    const location = useLocation(); // tra ve location  cua url hien tai
    const queryParams = useMemo(()=>{
        // nut back tren trinh duyet
        const params = queryString.parse(location.search) ; // chuyen string ve object chuoi
        return {
        ...params ,
        _page: Number.parseInt(params._page) || 1,
        _limit: Number.parseInt(params._limit) || 12,
        _sort : params._sort || 'salePrice:ASC', // sx tu thap toi cao
        isPromotion : params.isPromotion === 'true',
        isFreeShip : params.isFreeShip === 'true',
        };
    },[location.search]) ;

    const [productList, setProductList] = useState([]);
    const [pagination, setPagination] = useState({
        limit: 12,
        total: 10,
        page: 1
    });
    const [loading, setLoading] = useState(true);
    // const [filters, setFilters] = useState(()=>({
    //     ...queryParams ,
    //     _page: Number.parseInt(queryParams._page) || 1,
    //     _limit: Number.parseInt(queryParams._limit) || 12,
    //     _sort : queryParams._sort || 'salePrice:ASC', // sx tu thap toi cao
    // }));
    //dong bo filters len URL
    // useEffect(()=>{
    //     // sync filters to URL
    //     history.push({
    //         pathname : history.location.pathname ,
    //         search : queryString.stringify(filters), // chuyen object ve string
    //     });
    // },[history , filters]);
    useEffect(() => {
        (async () => {
            try {
                const { data, pagination } = await productApi.getAll(queryParams);
                setProductList(data);
                setPagination(pagination);
                // console.log({ data, pagination });
            } catch (error) {
                console.log("Failed to fetch product list :", error);
            }
            setLoading(false);
        })();
    }, [queryParams]);

    const handlePageChange = (e, page) => {
        // setFilters(prevFilters => ({
        //     ...prevFilters,
        //     _page: page,
        // }))
        const filters={
            ...queryParams,
            _page: page,
        };
        history.push({
            pathname : history.location.pathname ,
            search : queryString.stringify(filters), // chuyen object ve string
        });
    };
    const handleSortChange = (newSortValue) => {
        // setFilters(prevFilters => ({
        //     ...prevFilters,
        //     _sort: newSortValue,
        // }))
        const filters={
            ...queryParams,
            _sort: newSortValue,
        };
        history.push({
            pathname : history.location.pathname ,
            search : queryString.stringify(filters), // chuyen object ve string
        });
    };
    const handleFiltersChange = (newFilters) => {
        // setFilters(prevFilters => ({
        //     ...prevFilters,
        //     ...newFilters ,
        // }))
        const filters={
            ...queryParams,
            ...newFilters ,
        };
        history.push({
            pathname : history.location.pathname ,
            search : queryString.stringify(filters), // chuyen object ve string
        });
    };
    const setNewFilter = (newFilter) => {
        // setFilters(newFilter) ;
        history.push({
            pathname : history.location.pathname ,
            search : queryString.stringify(newFilter), // chuyen object ve string
        });
    };
    return (
        <Box>
            <Container>
                <Grid container spacing={2} >
                    {/* left */}
                    <Grid item className={classes.left}>
                        <Paper elevation={0}>
                            <ProductFilter filters={queryParams} onChange={handleFiltersChange}/>
                        </Paper>
                    </Grid>
                    {/* right */}
                    <Grid item className={classes.right}>
                        <Paper elevation={0} >
                            <ProductSort currentSort={queryParams._sort} onChange={handleSortChange}/>
                            <FilterViewer filters={queryParams} onChange={setNewFilter} />
                            {/* {console.log({ productList })} */}
                            {loading ? <ProductSkeletonList length={12} /> : <ProductList data={productList} />}
                            <Box className={classes.pagination}>
                                <Pagination
                                    count={Math.ceil(pagination.total / pagination.limit)}
                                    variant="outlined"
                                    color="primary"
                                    page={pagination.page}
                                    onChange={handlePageChange}
                                ></Pagination>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default ListPage;