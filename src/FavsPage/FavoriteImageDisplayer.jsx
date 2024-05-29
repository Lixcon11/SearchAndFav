
/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import FileSaver from 'file-saver';
import FavoritePhotoOverlay from "./FavoritePhotoOverlay";

const FavoriteImageDisplayer = ({ setModal }) => {
    const [photos, setPhotos] = useState()
    const favs = useSelector(state => state.favorites)

    useEffect(() =>{
        setPhotos(favs)
    }, [favs])

    const modalHandler = photo => {
        setModal({class: "visible", "photo": {...photo}})
    }
    const dowloadHandler = photo => {
        FileSaver.saveAs(photo.urls.full, `${photo.description}.jpg`)
    }
    return(
        <>
            {photos ? photos.map((element, i) => {
                return(
                    <div key={i} className="display-photo">
                        <img src={element.urls.small}/>
                        <FavoritePhotoOverlay modalHandler={modalHandler} dowloadHandler={dowloadHandler} photo={element}/>
                    </div>
                )
            }): ""}
        </>
    )
    
}

export default FavoriteImageDisplayer;