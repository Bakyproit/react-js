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
RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
};

function RegisterForm(props) {
    const classes = useStyles();

    const schema = yup.object({
        fullName: yup.string()
            .required('please enter your full name')
            .test('should has at least two words', 'please enter at least two words.', (value) => {
                return value.split(' ').length >= 2;
            }),
        email: yup.string()
            .required('please enter your email')
            .email('please enter a valid email'),
        password: yup.string()
            .required('please enter your password')
            .min(6, 'please enter at least 6 character'),
        retypePassword: yup.string()
            .required('please retypr your password. ')
            .oneOf([yup.ref('password')], 'password does not match'),
    }).required();

    const form = useForm({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            retypePassword: '',
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
                Create An Account
            </Typography>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name="fullName" label="Full Name" form={form} />
                <InputField name="email" label="Email" form={form} />
                <PasswordField name="password" label="Password" form={form} />
                <PasswordField name="retypePassword" label="Retype Password" form={form} />
                <Button
                    disabled={isSubmitting} 
                    type="submit" 
                    className={classes.submit} 
                    variant="contained" 
                    color="primary" 
                    fullWidth
                >
                    Create an account
                </Button>
            </form>
        </div>
    );
}

export default RegisterForm;