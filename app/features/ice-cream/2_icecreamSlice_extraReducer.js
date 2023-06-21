const {createSlice} = require('@reduxjs/toolkit');
const {cakeActions} = require('../cake/cakeSlice');

const INITIAL_STATE = {
    no_of_icecreams: 20,
}

const {actions, reducer} = createSlice({
    name: 'icecream',
    initialState: INITIAL_STATE,
    reducers: {
        order: (state, action)=>{
            state.no_of_icecreams -= action.payload
        },
        restock: (state, action)=>{
            state.no_of_icecreams += action.payload
        }
    },
    //create a extraReducer to handle scenario where icecream is given for free if cake is ordered
    /* extraReducers: {
        ['cake/order']: (state, action)=>{
            state.no_of_icecreams -= 1;
        }
    } */
    extraReducers: (builder)=>{
        builder.addCase(cakeActions.order, (state, action)=>{
            state.no_of_icecreams -= 1;
        })
    }
})

module.exports = {
    icecreamActions: actions,
    icecreamReducer: reducer
}