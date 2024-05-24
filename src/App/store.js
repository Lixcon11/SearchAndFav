import { configureStore } from "@reduxjs/toolkit";
import { favoritesSlice } from "./Features/favorites/favoritesSlice";
import { searchSlice } from "./Features/search/searchSlice";

export const store = configureStore({
    reducer: {
        "favorites": favoritesSlice.reducer,
        "search": searchSlice.reducer
    }
});