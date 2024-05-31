import { createSlice } from "@reduxjs/toolkit";

const storage = JSON.parse(localStorage.getItem("favs"));
const initialState = storage ? storage: []

export const favoritesSlice = createSlice({
    name: "favorites",
    initialState: initialState,
    reducers: {
        addFavorite: (state, action) => {state.push(action.payload)},
        removeFavorite: (state, action) => state.filter(photo => photo.id !== action.payload.id),
        changeDescription: (state, action) => {
            state.map(photo => {
                if(photo.id === action.payload.photo.id) {
                photo.description = action.payload.text
                }
            })
        }
    }
})

export const { addFavorite, removeFavorite, changeDescription } = favoritesSlice.actions;