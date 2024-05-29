import { createAsyncThunk } from "@reduxjs/toolkit";
import { sortData } from "./sortData";

const key = "Pe-sDrxuFO_vg07i5DKjWOb4O0223VPqHZQHpK20UWw";

export const fetchPhotoListThunk = createAsyncThunk("search/fetchPhotoList", async text => {
    try{
        let request = "";
        if(text) {
            request = await fetch(`https://api.unsplash.com/search/photos?query=${text}&per_page=30&client_id=${key}`);
        }
        else {
            request = await fetch(`https://api.unsplash.com/photos/random?count=30&client_id=${key}`);
        }

        if(request.ok) {
            const data = await request.json();
            const sortedData = sortData(text ? data.results: data);
            return sortedData;
        }
        return null;
    }
    catch(e){
        console.log(e)
        return null;
    }
})