const { configureStore } = require("@reduxjs/toolkit");
const { cakeReducer } = require("../features/cake/cakeSlice");
const { icecreamReducer } = require("../features/ice-cream/2_icecreamSlice_extraReducer");

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
  },
});

module.exports = {
  store,
};
