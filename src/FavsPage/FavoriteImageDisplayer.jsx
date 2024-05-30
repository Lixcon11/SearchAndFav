
/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import FileSaver from 'file-saver';
import FavoritePhotoOverlay from "./FavoritePhotoOverlay";
import ImageDisplayerZone from "../App/Components/ImageDisplayerZone";
import filterByWords from "../App/Functions/FilterByWords"
import sortByPreference from "../App/Functions/SortByPreference";

const FavoriteImageDisplayer = ({ setModal, preferences }) => {
    const [photos, setPhotos] = useState()
    const favs = useSelector(state => state.favorites)

    useEffect(() =>{
        let photoArray = favs;
        console.log(photoArray)
        if(photoArray){
            if(preferences.text){
                photoArray = filterByWords(photoArray, preferences.text);
            }
            if(preferences.sortBy !== "date"){
                photoArray = sortByPreference(photoArray, preferences.sortBy)
            }
        }
        console.log(photoArray)
        setPhotos(photoArray)
        
    },[favs,preferences])

    const modalHandler = photo => {
        setModal({class: "visible", "photo": {...photo}})
    }
    const dowloadHandler = photo => {
        FileSaver.saveAs(photo.urls.full, `${photo.description}.jpg`)
    }
    return(
        <>
            <ImageDisplayerZone>
                {photos ? photos.map((element, i) => {
                    return(
                        <div key={i} className="display-photo">
                            <img src={element.urls.small}/>
                            <FavoritePhotoOverlay modalHandler={modalHandler} dowloadHandler={dowloadHandler} photo={element}/>
                        </div>
                    )
                }): ""}
            </ImageDisplayerZone>
        </>
    )
    
}

export default FavoriteImageDisplayer;