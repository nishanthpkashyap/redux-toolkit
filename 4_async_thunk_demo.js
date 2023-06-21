const {dispatch, getState, subscribe} = require('./app/4_async_thunk_store').store;
const {fetchUsersList} = require('./app/features/users/usersSlice');

console.log("Initial state:", getState());

//no need to collect unsubscribe since thunk will take care of it
subscribe(()=>{console.log("Updated state:", getState())});

dispatch(fetchUsersList());