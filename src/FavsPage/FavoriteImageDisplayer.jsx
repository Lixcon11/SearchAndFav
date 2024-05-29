
/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import { addFavorite, removeFavorite } from "../App/Features/favorites/favoritesSlice";
import FileSaver from 'file-saver';
import { FavoritePhotoOverlay } from "./FavoritePhotoOverlay";

const FavoriteImageDisplayer = () => {
    const dispath = useDispatch()
    const [photos, setPhotos] = useState()
    const favs = useSelector(state => state.favorites)

    useEffect(() =>{
        setPhotos(favs)
    }, [favs])

    const favHandler = photo => {

        for(const fav of favs){
            
            if(fav.id === photo.id){
                dispath(removeFavorite(photo))
                return;
            }
        }
        dispath(addFavorite(photo))
    }
    const dowloadHandler = photo => {
        FileSaver.saveAs(photo.urls.full, `${photo.description}.jpg`)
    }
    console.log(photos)
    return(
        <>
            {photos ? photos.map((element, i) => {
                return(
                    <div key={i} className="display-photo">
                        <img src={element.urls.small}/>
                        <FavoritePhotoOverlay favHandler={favHandler} dowloadHandler={dowloadHandler} photo={element}/>
                    </div>
                )
            }): ""}
        </>
    )
    
}

export default FavoriteImageDisplayer;