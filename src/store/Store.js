import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './features/slices/counter/CounterSlice'

export default configureStore({
    reducer: {
        counter: counterSlice.reducer
    }
})