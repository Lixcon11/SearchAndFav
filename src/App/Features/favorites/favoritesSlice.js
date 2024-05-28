import { createSlice } from "@reduxjs/toolkit";


export const favoritesSlice = createSlice({
    name: "favorites",
    initialState: {data: []},
    reducers: {
        addFavorite: (state, action) => {state.data.push(action.payload)}
    }
})

export const { addFavorite } = favoritesSlice.actions;