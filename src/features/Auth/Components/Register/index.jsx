import { register } from 'features/Auth/userSlice';
import { useSnackbar } from 'notistack';
import { useDispatch } from 'react-redux';
import RegisterForm from '../RegisterForm';
import PropTypes from 'prop-types'

Register.propTypes = {
    closeDialog : PropTypes.func,
};

function Register(props) {
    const dispatch = useDispatch();
    const {enqueueSnackbar} = useSnackbar() ;


    const handleSubmit = async (values) => { 
        try {
            //auto set username = email
            values.username = values.email ;
            // console.log('Form submit :' , values);
            const action = register(values) ;
            const user = await dispatch(action).unwrap();
            //close dialog
            const {closeDialog} = props ;
            if(closeDialog){
                closeDialog();
            }
            console.log("New user " , user) ;
            enqueueSnackbar('Register successfully !' ,{variant:'success'});
        } catch (error) {
            console.log('faild to register :',error) ;
            enqueueSnackbar(error.message ,{variant:'error'});

        }
    }
    return (
        <div>
            <RegisterForm onSubmit={handleSubmit} />
        </div>
    );
}

export default Register;