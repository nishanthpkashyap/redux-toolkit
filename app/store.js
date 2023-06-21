const configureStore = require("@reduxjs/toolkit").configureStore;
const { cakeActions, cakeReducer } = require("./features/cake/cakeSlice");

const store = configureStore({
  reducer: { cake: cakeReducer },
});

module.exports = {
    store
};