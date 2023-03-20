import { makeStyles } from '@material-ui/core';
import { Box, Checkbox, FormControlLabel, Typography } from '@mui/material';
import PropTypes from 'prop-types';
//styles material ui
const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        borderTop: `1px solid ${theme.palette.grey[300]}`,
    },
    list :{
        padding : 0 , 
        margin:0 ,
        listStyleType : 'none' , 
        '& > li' : {
            margin : 0 , 
        }
    },

}));

FiltersByService.propTypes = {
    filter: PropTypes.object,
    onChange: PropTypes.func,
};

function FiltersByService({ filter = {}, onChange }) {
    const classes = useStyles();
    const handleChange = (e) => {
        if(onChange) onChange({[e.target.name] : e.target.checked});

    };
    return (
        <Box className={classes.root}>
            <Typography variant="subtitle2">Dịch vụ</Typography>
            <ul className={classes.list}>
                {[
                    {value:'isPromotion',label:'co khuyen mai'}, 
                    {value:'isFreeShip', label:'van chuyen mien phi'}
                ].map((service )=> (
                    <li key={service.value}>
                        <FormControlLabel
                            control={
                                <Checkbox 
                                    checked={Boolean(filter[service.value])} 
                                    onChange={handleChange} 
                                    name={service.value}
                                />
                            }
                            label={service.label}
                        />
                    </li>
                ))}
            </ul>
        </Box>
    );
}

export default FiltersByService;
