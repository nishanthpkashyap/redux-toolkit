const {configureStore} = require('@reduxjs/toolkit');
const {userReducer} = require('../features/users/usersSlice');

const store = configureStore({
    reducer: userReducer,
});

module.exports = {
    store,
};