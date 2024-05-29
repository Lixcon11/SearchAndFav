import FavoriteImageDisplayer from "./FavoriteImageDisplayer";

/*
import { useDispatch, useSelector } from "react-redux";
import Body from "../App/Components/Body";
import ImageDisplayer from "../App/Components/ImageDisplayer";
import { addFavorite } from "../App/Features/favorites/favoritesSlice";
*/
const Favs = () => {
  return  <FavoriteImageDisplayer/>
  /*
  const favshSelector = useSelector(state => state.favorites)
  const imageFormat = (element, i) => <img src={element.urls.small} key={i}/>
  const dispatch = useDispatch();
  const photo = useSelector(state => state.search.data[0])

  console.log(favshSelector)
  return (
    <>
    <Body theme="--favsTheme"/>
    <ImageDisplayer display={favshSelector} format={imageFormat}/>
    </>
  )
  */
}

export default Favs;
