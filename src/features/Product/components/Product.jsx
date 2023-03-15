import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { Skeleton, Typography } from '@mui/material';

Product.propTypes = {
    product: PropTypes.object,
};

function Product({ product }) {
    return (
        <Box padding={1}>
            <Skeleton variant="rect" width="100%" height={118} />
            <Typography variant='body2'>{product.name}</Typography>
            <Typography variant='body2'>{product.salePrice}-{product.originalPrice}</Typography>
        </Box>
    );
}

export default Product;