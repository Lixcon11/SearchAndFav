import { createSlice } from "@reduxjs/toolkit";
import { fetchPhotoListThunk } from "./searchThunk";

export const searchSlice = createSlice({
    name: "search",
    initialState: {
        status: "idle",
        data: [],
        error: null
    },
    reducers: {},
    extraReducers: builder => {
        builder
        .addCase(fetchPhotoListThunk.pending, (state) => {
            state.status = "pending";
            state.error = null;
        })
        .addCase(fetchPhotoListThunk.fulfilled, (state, action) => {
            state.status = "fulfilled";
            state.data = action.payload;
            state.error = null;
        })
        .addCase(fetchPhotoListThunk.rejected, (state, action) => {
            state.status = "rejected";
            state.error = action.payload;
        })
    }
})

export const { loadPhothos } = searchSlice.actions;