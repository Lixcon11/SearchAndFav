import { createAsyncThunk } from "@reduxjs/toolkit";
import { parseImage } from "./parseImage";

export const fetchPhotoListThunk = createAsyncThunk("search/fetchPhotoList", async text => {
    const key = "Pe-sDrxuFO_vg07i5DKjWOb4O0223VPqHZQHpK20UWw";
    const numberOfphotos = 28;
    try{
        let request = "";

        if(text) {
            request = await fetch(`https://api.unsplash.com/search/photos?query=${text}&per_page=${numberOfphotos}&client_id=${key}`);
        }
        else {
            request = await fetch(`https://api.unsplash.com/photos/random?count=${numberOfphotos}&client_id=${key}`);
        }

        if(request.ok) {
            const data = await request.json();
            const newData = parseImage(text ? data.results: data);
            return newData;
        }

        return null;
    }
    catch(e){
        console.log(e)
        return null;
    }
})