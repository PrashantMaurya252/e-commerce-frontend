
const { configureStore } = require("@reduxjs/toolkit");
import userReducer from './features/userSlice.js'
import cartReducer from './features/cartSlice.js'




const store = configureStore({
    reducer:{
        user:userReducer,
        cart:cartReducer
    }
})

export default store