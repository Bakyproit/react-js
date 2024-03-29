import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { Grid, Skeleton } from '@mui/material';

ProductSkeletonList.propTypes = {
    length: PropTypes.number,
};
ProductSkeletonList.defaultProps = {
    length: 12,
};

function ProductSkeletonList({length}) {
    return (
        <Box>
            <Grid container>
                {Array.from(new Array(length)).map((x, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                        <Box padding={1}>
                            <Skeleton variant="rectangular" width="100%" height={200} />
                            <Skeleton animation="wave" />
                            <Skeleton width="60%" animation="wave"/>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default ProductSkeletonList;
