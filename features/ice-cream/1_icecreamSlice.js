const {createSlice} = require('@reduxjs/toolkit');

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
    }
})

module.exports = {
    icecreamActions: actions,
    icecreamReducer: reducer
}