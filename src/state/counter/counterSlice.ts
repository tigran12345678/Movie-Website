import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

interface CounterState {
    value: number
}


const initialState: CounterState = {
    value: 0,
}


const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers:{
        increment: (state) => {
            state.value += 1;
        },
        
        decrement: (state) => {
            state.value -= 1; 
        },
        incrementByAmount(state, action){
            state.value += action.payload;
        },
        decrementByAmount(state, action){
            state.value -= action.payload;
        }
    },
});

export const incrementAsync = createAsyncThunk(
    "counter/incrementAync",
    async function(amount: number){
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return amount;
    }
)


export const {increment, decrement, incrementByAmount, decrementByAmount} = counterSlice.actions;
export default counterSlice.reducer; 