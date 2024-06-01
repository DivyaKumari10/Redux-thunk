import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    count: 0,
    data: []
}

export const counterSlice = createSlice({
    name: 'toolkit',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state,action) => {
            console.log('decrement',action);
            state.count -= 1
        },
        fetchData : (state, action) => {
            console.log('fetch',action)

            state.data = action.payload
        },
    },
})

export const { increment, decrement, fetchData } = counterSlice.actions

export default counterSlice.reducer