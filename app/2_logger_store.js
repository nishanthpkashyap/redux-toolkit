const { configureStore } = require("@reduxjs/toolkit");
const { createLogger } = require("redux-logger");
const { cakeReducer } = require("./features/cake/cakeSlice");
const { icecreamReducer } = require("./features/ice-cream/icecreamSlice");

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
  },
  middleware: [createLogger()],
});

module.exports = {
    store,
};
