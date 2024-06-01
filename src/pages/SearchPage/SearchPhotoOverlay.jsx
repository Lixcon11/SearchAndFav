/* eslint-disable react/prop-types */
import { useState } from "react"
import { Overlay } from "../../components/Overlay"
import { useSelector } from "react-redux"
import { addFavorite, removeFavorite } from "../../features/favorites/favoritesSlice";
import { useDispatch } from "react-redux";
import blackHeart from "../../icons/black-heart.png"
import redHeart from "../../icons/red-heart.png"

export const SearchPhotoOverlay = ({ photo }) => {
    const [heart, setHeart] = useState(blackHeart)
    const favs = useSelector(state => state.favorites)
    const dispatch = useDispatch()

    const favHandler = () => {
        if(favs.filter(favPhoto => favPhoto.id === photo.id)[0]){
            dispatch(removeFavorite(photo))
            setHeart(blackHeart)
        }
        else {
            const date = new Date();
            const fullDate = `${date.getFullYear()}/${date.getMonth()}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
            dispatch(addFavorite({...photo, date: fullDate}))
            setHeart(redHeart)
        }
    }

    return(
        <>
            <Overlay>
                <img onClick={favHandler} src={heart} className="icon"/>
            </Overlay>
        </>
    )
}