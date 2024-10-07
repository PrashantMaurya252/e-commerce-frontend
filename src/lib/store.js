const { configureStore } = require("@reduxjs/toolkit");



const store = configureStore({
    reducer:{
        user:userReducer,
        cart:cartReducer
    }
})

export default store