const {createSlice} = require('@reduxjs/toolkit') ;
//setup counterSlice
// tao ra actions reducers
const counterSlice = createSlice({
    name : 'counter' , 
    initialState  : 0 , 
    reducers : {
        //action
        increase(state){
            return state + 1 ;
        },
        decrease(state){
            return state - 1 ;
        },
    },
});

const {actions , reducer} = counterSlice ;
export const {increase , decrease} = actions ;
export default reducer ;