/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import Overlay from "../App/Components/Overlay"
import { useSelector } from "react-redux"
import download from "../App/images/download.png"
import blackHeart from "../App/images/black-heart.png"
import redHeart from "../App/images/red-heart.png"

const SearchPhotoOverlay = ({favHandler, dowloadHandler, photo}) => {
    const [heart, setHeart] = useState("/src/App/images/black-heart.png")
    const favs = useSelector(state => state.favorites)

    useEffect(()=> {
        let heartColor = blackHeart;

        for(const fav of favs){
            if(fav.id === photo.id){
                heartColor = redHeart;
            }
        }

        setHeart(heartColor)
    },[favs, photo])

    return(
        <>
            <Overlay>
                <img src={download} className="icon" onClick={e => dowloadHandler(photo, e)}/>
                <div className="division"></div>
                <img onClick={e => favHandler(photo, e)} src={heart} className="icon"/>
            </Overlay>
        </>
    )
}

export default SearchPhotoOverlay;