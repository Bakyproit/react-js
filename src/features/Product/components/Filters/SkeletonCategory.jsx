import React from 'react';
import PropTypes from 'prop-types';
import { Box, Skeleton, Typography } from '@mui/material';

SkeletonCategory.propTypes = {
    length: PropTypes.number,
};
SkeletonCategory.defaultProps = {
    length: 6,
};

function SkeletonCategory({ length }) {
    return (
        <Box sx={{ height: 200 }} >
            <Typography variant='subtitle2' sx={{textAlign:'center',marginTop:1,}}>Danh Muc San Pham</Typography>
            {Array.from(new Array(length)).map((x, index) => (
                <Skeleton sx={{ margin:1}} key={index} width="80%" animation="wave" />
            ))}
        </Box>
    );
}

export default SkeletonCategory;