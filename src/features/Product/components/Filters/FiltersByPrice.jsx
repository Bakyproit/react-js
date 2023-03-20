import { Box, Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
//styles material ui
const useStyles = makeStyles((theme) =>({
    root : {
        padding:theme.spacing(2),
        borderTop : `1px solid ${theme.palette.grey[300]}`,
    },
    range : {
        marginTop : theme.spacing(1) ,
        marginBottom : theme.spacing(1),
        display : 'flex',
        flexFlow :'row nowrap',
        alignItems : 'center',
        textAlign :'center',

        '& > span' : {
            marginLeft : theme.spacing(1) , 
            marginRight : theme.spacing(1) ,
        }
    },

}));

FiltersByPrice.propTypes = {
    onChange : PropTypes.func,
};

function FiltersByPrice({onChange}) {
    const classes = useStyles() ;
    const [values , setValues] = useState({
        salePrice_lte : 0, 
        salePrice_gte : 0,
    });
    const handleChange = (e)=>{
        // su dung callback
        setValues(prevValues => ({
            ...prevValues ,
            [e.target.name] : e.target.value ,
        }));
    };
    const handleSubmit = () => {
        // console.log(values);
        if(onChange) onChange(values) ;
        setValues({
            salePrice_lte : 0, 
        salePrice_gte : 0,
        });
    };
    return (
        <Box className={classes.root}>
            <Typography variant="subtitle2">Giá</Typography>
            <Box className={classes.range}>
                <TextField name='salePrice_gte' value={values.salePrice_gte} onChange={handleChange} variant="standard"/>
                <span> - </span>
                <TextField name='salePrice_lte' value={values.salePrice_lte} onChange={handleChange} variant="standard"/>
            </Box>
            <Button 
                variant="outlined" 
                color="primary"
                onClick={handleSubmit}
                size="small"
            >
                Áp dụng
            </Button>
        </Box>
    );
}

export default FiltersByPrice;
