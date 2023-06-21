const {getState, dispatch, subscribe} = require('./app/store').store; //1st responsibility - create a store to store state
const {cakeActions, cakeReducer} = require('./app/features/cake/cakeSlice')

//2st responsibility - getState()
console.log("Initial state:\n", getState());

//4th responsibility - subscribe by passing listener func which will be called when state changes
const unsubscribe = subscribe(()=>{console.log("Updated State:", getState())});

//3rd responsibility - dispatch() actions to change state
dispatch(cakeActions.order(2))
dispatch(cakeActions.order(2))
dispatch(cakeActions.order(2))
dispatch(cakeActions.restock(6))

//5th responsibility - unsubscibe() all listeners
unsubscribe();

