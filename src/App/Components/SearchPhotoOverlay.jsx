/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { Overlay } from "./Overlay"
import { useSelector } from "react-redux"

export const SearchPhotoOverlay = ({favHandler, dowloadHandler, photo}) => {
    
    const [heart, serHeart] = useState("/src/App/images/black-heart.png")
    const favs = useSelector(state => state.favorites)
    //FileSaver.saveAs(photo.urls.full, photo.description)

    useEffect(()=> {
        serHeart("/src/App/images/black-heart.png")
        
        for(const fav of favs){
            if(fav.id === photo.id){
                serHeart("/src/App/images/red-heart.png")
            }
        }
    },[favs, photo])
    console.log(photo)
    return(
        <Overlay>
            <img src="/src/App/images/download.png" className="icon" onClick={e => dowloadHandler(photo, e)}/>
            <div></div>
            <img onClick={e => favHandler(photo, e)} src={heart} className="icon"/>
        </Overlay>
    )
}