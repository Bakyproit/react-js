import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import userApi from 'api/userApi';
import StorageKeys from 'constants/storage-keys';

//async action
export const register = createAsyncThunk('user/register',async (payload) => {
        //call api to register
        const data = await userApi.register(payload) ;
        //save data to local storage
        localStorage.setItem(StorageKeys.TOKEN , data.jwt);
        localStorage.setItem(StorageKeys.USER ,JSON.stringify(data.user)) ;
        //return user data
        return data.user ;
    }
);
export const login = createAsyncThunk('user/login',async (payload) => {
    //call api to register
    const data = await userApi.login(payload) ;
    //save data to local storage
    localStorage.setItem(StorageKeys.TOKEN , data.jwt);
    localStorage.setItem(StorageKeys.USER ,JSON.stringify(data.user)) ;
    //return user data
    return data.user ;
    }
);
const userSlice = createSlice({
    name : 'user' , 
    initialState : {
        // khoi tao redux state tu localstorage
        current :JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
        settings : {},
    } , 
    reducers : {
        // actions
        logout(state){
            //clear local storage
            localStorage.removeItem(StorageKeys.USER) ;
            localStorage.removeItem(StorageKeys.TOKEN) ;
            state.current = {};
        }
    },
    extraReducers:{
        [register.fulfilled] : (state , action) =>{
            state.current = action.payload
        },
        [login.fulfilled] : (state , action) =>{
            state.current = action.payload
        },
    }
});
const { actions , reducer } = userSlice ; 
export const {logout} = actions ;
export default reducer ; // default export