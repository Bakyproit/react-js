import { login } from 'features/Auth/userSlice';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import LoginForm from '../LoginForm';

Login.propTypes = {
    closeDialog : PropTypes.func,
};

function Login(props) {
    const dispatch = useDispatch();
    const {enqueueSnackbar} = useSnackbar() ;

    const handleSubmit = async (values) => { 
        try {
            // console.log('Form submit :' , values);
            const action = login(values) ;
            const user = await dispatch(action).unwrap();
            //close dialog
            const {closeDialog} = props ;
            if(closeDialog){
                closeDialog();
            }
        } catch (error) {
            console.log('faild to login :',error) ;
            enqueueSnackbar(error.message ,{variant:'error'});

        }
    }
    return (
        <div>
            <LoginForm onSubmit={handleSubmit} />
        </div>
    );
}

export default Login;