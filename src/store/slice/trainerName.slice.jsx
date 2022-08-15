import { createSlice } from '@reduxjs/toolkit';

export const trainerNameSlice = createSlice({
    name: 'trainerName',
    initialState: "",
    reducers: {
        changeTrainer: (_state, action ) => {
            return action.payload
        }
    }
})

export const { changeTrainer } = trainerNameSlice.actions;

export default trainerNameSlice.reducer;
