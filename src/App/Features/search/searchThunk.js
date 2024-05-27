import { createAsyncThunk } from "@reduxjs/toolkit";

const key = "Pe-sDrxuFO_vg07i5DKjWOb4O0223VPqHZQHpK20UWw";

export const fetchPhotoListThunk = createAsyncThunk("search/fetchPhotoList", async text => {
    try{
        const request = await fetch(`https://api.unsplash.com/photos/?client_id=${key}`); //to add text
        if(request.ok) {
            const data = await request.json();
            return data;
        }
    
        return null;
    }
    catch(e){
        console.log(e)
        return null;
    }
})