/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import Overlay from "../App/Components/Overlay"
import { useSelector } from "react-redux"

const SearchPhotoOverlay = ({favHandler, dowloadHandler, photo}) => {
    const [heart, setHeart] = useState("/src/App/images/black-heart.png")
    const favs = useSelector(state => state.favorites)

    useEffect(()=> {
        let heartColor = "/src/App/images/black-heart.png";

        for(const fav of favs){
            if(fav.id === photo.id){
                heartColor ="/src/App/images/red-heart.png";
            }
        }

        setHeart(heartColor)
    },[favs, photo])

    return(
        <>
            <Overlay>
                <img src="/src/App/images/download.png" className="icon" onClick={e => dowloadHandler(photo, e)}/>
                <div className="division"></div>
                <img onClick={e => favHandler(photo, e)} src={heart} className="icon"/>
            </Overlay>
        </>
    )
}

export default SearchPhotoOverlay;