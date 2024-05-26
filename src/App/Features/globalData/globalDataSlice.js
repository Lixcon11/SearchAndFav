import { createSlice } from "@reduxjs/toolkit";

export const globalData = createSlice({
    name: "globalData",
    initialState: { forSearch:{path:"search", theme: "--searchTheme"}, forFavs:{path: "favs", theme: "--favsTheme"}},
    reducers: {}
})

export const data = globalData.getInitialState();
export const getThemeAndPath = () => {
    for(let element in data){
        if(`/${data[element].path}` === window.location.pathname){
            return [data[element].theme, data[element].path];
        }
    }
    return "wrong theme input"
}