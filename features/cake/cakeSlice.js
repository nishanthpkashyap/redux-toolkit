const createSlice = require('@reduxjs/toolkit').createSlice;

const INITIAL_STATE = {
    no_of_cakes: 10,
};


//takes 3 properties - name of slice, initial state and 
const {actions, reducer} = createSlice({
    name: 'cake',
    initialState: INITIAL_STATE,
    reducers: {
        order: (state, action)=>{
            state.no_of_cakes -= action.payload;
        },
        restock: (state, action)=>{
            state.no_of_cakes += action.payload;
        }
    }
});

module.exports = {
    cakeActions: actions, 
    cakeReducer: reducer
}
