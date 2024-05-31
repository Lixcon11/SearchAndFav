
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import { FavoritePhotoOverlay } from "./FavoritePhotoOverlay";
import { ImageDisplayerZone } from "../../components/ImageDisplayerZone";
import { filterByWords } from "../../function/FilterByWords"
import { sortByPreference } from "../../function/SortByPreference";

export const FavoriteImageDisplayer = ({ setModal, preferences }) => {
    const favs = useSelector(state => state.favorites)
    const [photos, setPhotos] = useState()

    useEffect(() =>{
        let photoArray = favs;

        if(photoArray[0]){
            if(preferences.text){
                photoArray = filterByWords(photoArray, preferences.text);
            }
            if(preferences.sortBy !== "date"){
                photoArray = sortByPreference(photoArray, preferences.sortBy)
            }
        }

        setPhotos(photoArray)
    },[favs,preferences])
    
    return(
        <>
            <ImageDisplayerZone>
                {photos ? photos.map((element, i) => {
                    return(
                        <div key={i} className="display-photo">
                            <img src={element.urls.small}/>
                            <FavoritePhotoOverlay setModal={setModal} photo={element}/>
                        </div>
                    )
                }): null}
            </ImageDisplayerZone>
        </>
    )
}