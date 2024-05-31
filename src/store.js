//import { bindActionCreators } from "redux"
import { configureStore } from "@reduxjs/toolkit";
import { favoritesSlice } from "./features/favorites/favoritesSlice.js";
import { searchSlice } from "./features/search/searchSlice.js";

export const store = configureStore({
    reducer: {
        favorites: favoritesSlice.reducer,
        search: searchSlice.reducer
    },
});