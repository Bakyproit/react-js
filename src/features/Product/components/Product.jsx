import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from 'constants';
import PropTypes from 'prop-types';

Product.propTypes = {
    product: PropTypes.object,
};

function Product({ product }) {
    const thumbnailUrl = product.thumbnail 
        ? `${STATIC_HOST}${product.thumbnail?.url}`
        : THUMBNAIL_PLACEHOLDER ;
    return (
        <Box padding={1}>
            <Box padding={1} minHeight="215px">
                <img
                    src={thumbnailUrl}
                    alt={product.name}
                    width="100%"
                />
            </Box>
            <Typography variant='body2'>{product.name}</Typography>
            <Typography variant='body2'>
                <Box component="span" fontSize="12px" fontWeight="bold" mr={1} >
                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'NVD' }).format(product.salePrice)}
                </Box>
                    {product.promotionPercent > 0 ? ` - ${product.promotionPercent}%` : ''}
                </Typography>
        </Box>
    );
}

export default Product;