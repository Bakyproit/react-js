import React from 'react';
import PropTypes from 'prop-types';
import {useForm} from 'react-hook-form' ;
import InputField from '../../../../components/form-controls/inputField';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

TodoForm.propTypes = {
    onSubmit : PropTypes.func,
};

function TodoForm(props) {

    const schema = yup.object().shape({
        title: yup.string()
            .required('please enter title')
            .test('should has at least two words' , 'please enter at least two words.' , (value)=>{
                console.log('Value ' , value) ; 
                return value.split(' ').length >= 2 ;
            }) ,
    });
    const form = useForm({
        defaultValues : {
            title : '' ,
        },
        resolver : yupResolver(schema) ,
    });
    const handleSubmit = (values) => {
        // console.log('Todo form ', values) ;
        const {onSubmit} = props ; 
        if(onSubmit){
            onSubmit(values) ;
        }
        form.reset() ;
    };
    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <InputField name="title" label="Todo" form={form}/>
        </form>
    );
}

export default TodoForm;