//import { bindActionCreators } from "redux"
import { configureStore } from "@reduxjs/toolkit";
import { favoritesSlice } from "./Features/favorites/favoritesSlice.js";
import { searchSlice } from "./Features/search/searchSlice.js";
import { globalData } from "./Features/globalData/globalDataSlice.js";

export const store = configureStore({
    reducer: {
        favorites: favoritesSlice.reducer,
        search: searchSlice.reducer,
        globalData: globalData.reducer
    },
});