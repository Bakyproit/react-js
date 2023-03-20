import { Box, Typography } from '@mui/material';
import categoryApi from 'api/categoryApi';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import SkeletonCategory from './SkeletonCategory';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2),
    },
    menu: {
        padding: 0,
        margin: 0,
        listStyleType: 'none',
        '& > li': {
            marginTop: theme.spacing(2),
            transition: 'all .25s',
            '&:hover': {
                color: theme.palette.primary.dark,
                cursor: 'pointer',
            }
        }
    },
}));


FiltersByCategory.propTypes = {
    onChange: PropTypes.func,
};

function FiltersByCategory({ onChange }) {
    const classes = useStyles();
    const [loading, setLoading] = useState(true);
    const [categoryList, setCategoryList] = useState([]);
    
    // call api
    useEffect(() => {
        (async () => {
            try {
                // lay name với id
                const list = await categoryApi.getAll();
                setCategoryList(list.map((x) => ({
                    id: x.id,
                    name: x.name,
                })));
            } catch (error) {
                console.log('Failed to fectch category list ', error);
            }
            setLoading(false) ;
        })();
    }, []);

    const handleCategoryClick = (category) => {
        if (onChange) {
            onChange(category.id);
        }
    }
    return (
        <>
            {loading ? <SkeletonCategory length={6} /> :
                <Box className={classes.root}>
                    <Typography variant='subtitle2'>Danh Muc san pham</Typography>
                    <ul className={classes.menu}>
                        {categoryList.map((category) => (
                            <li key={category.id} onClick={() => handleCategoryClick(category)}>
                                <Typography variant='body2' > {category.name} </Typography>
                            </li>
                        ))}
                    </ul>
                </Box>
            }
        </>
    );
}

export default FiltersByCategory;