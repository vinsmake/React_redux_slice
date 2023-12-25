import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        MyContador: 10
    },
    reducers: {
        increment: (state) => {
            state.MyContador += 1
        },
        decrement: (state) => {
            state.MyContador -= 1
        },
        incrementByAmount: (state, action) => {
            state.MyContador += action.payload
        },
        decrementByAmount: (state, action) => {
            state.MyContador -= action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, decrementByAmount } = counterSlice.actions