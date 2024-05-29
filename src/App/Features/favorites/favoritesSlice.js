import { createSlice } from "@reduxjs/toolkit";


export const favoritesSlice = createSlice({
    name: "favorites",
    initialState: [],
    reducers: {
        addFavorite: (state, action) => {state.push(action.payload)},
        removeFavorite: (state, action) => state.filter(photo => photo.id !== action.payload.id)
    }
})

export const { addFavorite, removeFavorite } = favoritesSlice.actions;