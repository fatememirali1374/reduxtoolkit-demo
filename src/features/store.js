import { configureStore } from "@reduxjs/toolkit"
import cakeSlice from "./cake/cakeSlice"
import milkSlice from "./milk/milkSlice"
import userSlice from "./user/userSlice"

const store = configureStore({
    reducer: {
        cake: cakeSlice,
        milk: milkSlice,
        users: userSlice
    }
})

export default store