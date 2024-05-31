/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
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

    useEffect(()=> {
        let heartColor = blackHeart;

        for(const fav of favs){
            if(fav.id === photo.id){
                heartColor = redHeart;
            }
        }

        setHeart(heartColor)
    },[favs, photo])

    const favHandler = () => {

        for(const fav of favs){
            
            if(fav.id === photo.id){
                dispatch(removeFavorite(photo))
                return;
            }
        }
        const date = new Date();
        const fullDate = `${date.getFullYear()}/${date.getMonth()}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
        dispatch(addFavorite({...photo, date: fullDate}))
    }

    return(
        <>
            <Overlay>
                <img onClick={favHandler} src={heart} className="icon"/>
            </Overlay>
        </>
    )
}