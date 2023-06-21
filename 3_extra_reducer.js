const {getState, dispatch, subscribe} = require('./app/3_extra-reducer_store').store; //1st responsibility - create a store to store state
const {cakeActions} = require('./app/features/cake/cakeSlice');
const {icecreamActions} = require('./app/features/ice-cream/2_icecreamSlice_extraReducer');

//2st responsibility - getState()
console.log("Initial state:\n", getState());

//4th responsibility - subscribe by passing listener func which will be called when state changes
const unsubscribe = subscribe(()=>{console.log("Updated State:", getState())});

//3rd responsibility - dispatch() actions to change state
dispatch(cakeActions.order(2))
dispatch(cakeActions.order(2))
dispatch(cakeActions.order(2))
dispatch(cakeActions.restock(10 - getState().cake.no_of_cakes))
dispatch(icecreamActions.order(4))
dispatch(icecreamActions.order(4))
dispatch(icecreamActions.order(4))
dispatch(icecreamActions.restock(20 - getState().icecream.no_of_icecreams))

//5th responsibility - unsubscibe() all listener
unsubscribe();

