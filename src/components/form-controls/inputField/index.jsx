import React from 'react';
import PropTypes from 'prop-types';
import {TextField} from '@material-ui/core' ; 
import { Controller ,formState } from 'react-hook-form';
//form input
InputField.propTypes = {
    form : PropTypes.object.isRequired , 
    name : PropTypes.string.isRequired , 

    label : PropTypes.string,
    disabled : PropTypes.bool,
};

function InputField(props) {

    const {form , name , label , disabled} = props ; 
    const {control} = form ;
    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange, onBlur, value }, fieldState: { invalid, error } }) => (
                <TextField
                    margin="normal"
                    variant="outlined"

                    onChange={onChange}
                    onBlur={onBlur}
                    selected={value}

                    error={invalid}
                    helperText={error?.message}
                    fullWidth
                    label={label}
                />
            )}
        />
    );
}

export default InputField;