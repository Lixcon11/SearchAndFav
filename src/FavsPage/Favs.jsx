import { useSelector } from "react-redux";
import Body from "../App/Components/Body";
import FavoriteImageDisplayer from "./FavoriteImageDisplayer";
import { useEffect } from "react";

const Favs = () => {
  const favs = useSelector(state => state.favorites)
  useEffect(()=>{
    localStorage.setItem("favs", JSON.stringify(favs))
  }, [favs])

  return(
    <>
    <Body theme="--favsTheme"/>
      <section className="image-container">
        <FavoriteImageDisplayer/>
      </section>
    </>
  )
}

export default Favs;