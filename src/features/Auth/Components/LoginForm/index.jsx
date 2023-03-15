import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Button, LinearProgress, makeStyles, Typography } from '@material-ui/core';
import LockOutlined from '@material-ui/icons/LockOutlined';
import InputField from 'components/form-controls/inputField';
import PasswordField from 'components/form-controls/PasswordField';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import * as yup from "yup";

//form conponents
// style material ui
const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: theme.spacing(6),
    },
    avatar: {
        margin: "0 auto",
        backgroundColor: theme.palette.secondary.main,
    },
    title: {
        margin: theme.spacing(1),
        textAlign: "center",
    },
    submit: {
        margin: theme.spacing(1, 0, 0, 0),
    },
    progress : {
        marginBottom : theme.spacing(2),
    }
}));
//
LoginForm.propTypes = {
    onSubmit: PropTypes.func,
};

function LoginForm(props) {
    const classes = useStyles();

    const schema = yup.object({
        identifier: yup.string()
            .required('please enter your email')
            .email('please enter a valid email'),
        password: yup.string()
            .required('please enter your password'),
    }).required();

    const form = useForm({
        defaultValues: {
            identifier : '',
            password : '',
        },
        resolver: yupResolver(schema),
    });

    const handleSubmit = async (values) => {
        const { onSubmit } = props;
        if (onSubmit) {
            await onSubmit(values);
        }
    };
    const { isSubmitting } = form.formState;

    return (
        <div className={classes.root}>
            {/* loading */}
            {isSubmitting && <LinearProgress className={classes.progress} />}
            <Avatar className={classes.avatar}>
                <LockOutlined />
            </Avatar>

            <Typography className={classes.title} component="h3" variant="h5">
                Sign In
            </Typography>
            
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name="identifier" label="Email" form={form} />
                <PasswordField name="password" label="Password" form={form} />
                <Button
                    disabled={isSubmitting} 
                    type="submit" 
                    className={classes.submit} 
                    variant="contained" 
                    color="primary" 
                    fullWidth
                >
                    Sign In
                </Button>
            </form>
        </div>
    );
}

export default LoginForm ;