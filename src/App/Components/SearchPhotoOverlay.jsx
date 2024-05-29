/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { Overlay } from "./Overlay"
import { useSelector } from "react-redux"


export const SearchPhotoOverlay = ({favHandler, photo}) => {
    
    const [heart, serHeart] = useState("/src/App/images/black-heart.png")
    const favs = useSelector(state => state.favorites)
    useEffect(()=> {
        if(favs){
            for(const fav of favs){
                if(fav.id !== photo.id){
                    serHeart("/src/App/images/black-heart.png")
                }
                else{
                    serHeart("/src/App/images/red-heart.png")
                }
            }
        }
        else{
            serHeart("/src/App/images/black-heart.png")
        }
    },[favs, photo])
    return(
        <Overlay>
            <a href={photo.urls.full} download={photo.description}><img src="/src/App/images/download.png" className="icon"/></a>
            <div></div>
            <img onClick={e => favHandler(photo, e)} src={heart} className="icon"/>
        </Overlay>
    )
}