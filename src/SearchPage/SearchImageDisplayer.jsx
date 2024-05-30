import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addFavorite, removeFavorite } from "../App/Features/favorites/favoritesSlice";
import SearchPhotoOverlay from "./SearchPhotoOverlay";
import ImageDisplayerZone from "../App/Components/ImageDisplayerZone";
import downloadPhoto from "../App/Functions/downloadPhoto";

const SearchImageDisplayer = () => {
    const dispath = useDispatch()
    const [photos, setPhotos] = useState()
    const [loading, setLoading] = useState(true);
    const display = useSelector(state => state.search)
    const photoStatus = display.status;
    const photoData = display.data;
    const photoError = display.error;
    const favs = useSelector(state => state.favorites)

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

    const favHandler = photo => {

        for(const fav of favs){
            
            if(fav.id === photo.id){
                dispath(removeFavorite(photo))
                return;
            }
        }
        const date = new Date();
        const fullDate = `${date.getFullYear()}/${date.getMonth()}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
        dispath(addFavorite({...photo, date: fullDate}))
    }
    const dowloadHandler = photo => {
        downloadPhoto(photo)
    }

    return(
        <>
            <ImageDisplayerZone>
                <ToastContainer />
                {loading ? "":photos.map((element, i) => {
                    return(
                        <div key={i} className="display-photo">
                            <img src={element.urls.small}/>
                            <SearchPhotoOverlay favHandler={favHandler} dowloadHandler={dowloadHandler} photo={element}/>
                        </div>
                    )
                })}
            </ImageDisplayerZone>
        </>
    )
}

export default SearchImageDisplayer;