import { Box, IconButton, Menu, MenuItem } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { AccountCircle, Close } from '@material-ui/icons';
import CodeIcon from '@material-ui/icons/Code';
import Login from 'features/Auth/Components/Login';
import Register from 'features/Auth/Components/Register';
import { logout } from 'features/Auth/userSlice';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    link: {
        color: '#fff',
        textDecoration: 'none',
    },
    closeButton: {
        position: 'absolute',
        top: theme.spacing(1),
        right: theme.spacing(1),
        color: theme.palette.grey[500],
    }
}));
const MODE = {
    LOGIN: 'login',
    REGISTER: 'register',
};

export default function Header() {
    const classes = useStyles();
    const dispatch = useDispatch();
    //kiem tra xem da dang nhap chua
    const loggedInUser = useSelector(state => state.user.current);
    const isLoggedIn = !!loggedInUser.id;

    const [open, setOpen] = useState(false);
    const [mode, setMode] = useState(MODE.LOGIN);
    //menu
    const [anchorEl ,setAnchorEl] = useState(null);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    //menu
    const handleUserClick = (e) => {
        setAnchorEl(e.currentTarget);
    };
    const handleCloseMenu = ()=>{
        setAnchorEl(null) ;
    };
    const handleLogoutClick = ()=>{
        // tao action
        const action = logout() ;
        dispatch(action) ;
    };
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <CodeIcon className={classes.menuButton} />

                    <Typography variant="h6" className={classes.title}>
                        <Link to="/" className={classes.link}>EZ shop</Link>
                    </Typography>

                    <NavLink to="/todos" className={classes.link}>
                        <Button color="inherit">Todos</Button>
                    </NavLink>
                    <NavLink to="/songs" className={classes.link}>
                        <Button color="inherit">Songs</Button>
                    </NavLink>
                    {!isLoggedIn && (
                        <Button color="inherit" onClick={handleClickOpen}>
                            Login
                        </Button>
                    )}
                    {isLoggedIn && (
                        <IconButton>
                            <AccountCircle color="inherit" onClick={handleUserClick} />
                        </IconButton>
                    )}
                </Toolbar>
            </AppBar>

            <Menu
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                getContentAnchorEl={null}
            >
                <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
                <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
            </Menu>

            <Dialog
                disableBackdropClick
                disableEscapeKeyDown
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <IconButton className={classes.closeButton} onClick={handleClose}>
                    <Close />
                </IconButton>
                <DialogContent>
                    {mode === MODE.REGISTER && (
                        <>
                            <Register closeDialog={handleClose} />
                            <Box textAlign="center">
                                {/* khi click thi set mode */}
                                <Button color="primary" onClick={() => setMode(MODE.LOGIN)}>
                                    Already have an account. Login here .
                                </Button>
                            </Box>
                        </>
                    )}
                    {mode === MODE.LOGIN && (
                        <>
                            <Login closeDialog={handleClose} />
                            <Box textAlign="center">
                                {/* khi click thi set mode */}
                                <Button color="primary" onClick={() => setMode(MODE.REGISTER)}>
                                    Done have an account. Register here .
                                </Button>
                            </Box>
                        </>
                    )}
                </DialogContent>
                {/* <DialogActions>
            <Button onClick={handleClose} color="primary">
            Cancel
            </Button>
            </DialogActions> */}
            </Dialog>

        </div>
    );
}
