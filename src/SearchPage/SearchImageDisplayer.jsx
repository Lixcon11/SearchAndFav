import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchPhotoOverlay from "./SearchPhotoOverlay";
import ImageDisplayerZone from "../App/Components/ImageDisplayerZone";
import { fetchPhotoListThunk } from "../App/Features/search/searchThunk";

const SearchImageDisplayer = () => {
    const dispatch = useDispatch()
    const [photos, setPhotos] = useState()
    const [loading, setLoading] = useState(true);
    const display = useSelector(state => state.search)
    const photoStatus = display.status;
    const photoData = display.data;
    const photoError = display.error;

    if(!photoData[0]) {
        dispatch(fetchPhotoListThunk(""))
    }

    useEffect(()=> {
        if(photoStatus === "fulfilled"){
            setLoading(false)
            setPhotos(photoData)
        }
        else if(photoStatus === "rejected"){
            setLoading(false)
            toast(`Error: ${photoError}`)
        }
        else if(photoStatus === "pending"){
            setLoading(true)
        }

    },[photoStatus, photoData, photoError])

    return(
        <>
            <ImageDisplayerZone>
                {!loading ? photos.map((element, i) => {
                    return(
                        <div key={i} className="display-photo">
                            <img src={element.urls.small}/>
                            <SearchPhotoOverlay photo={element}/>
                        </div>
                    )
                }): null}
            </ImageDisplayerZone>
            <ToastContainer/>
        </>
    )
}

export default SearchImageDisplayer;