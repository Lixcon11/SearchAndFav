import { useSelector } from "react-redux";
import FavoriteImageDisplayer from "./FavoriteImageDisplayer";
import { useEffect, useState } from "react";
import ModalPopup from "./ModalPopup";
import SearcherOfFavorites from "./SearcherOfFavorites";

const Favs = () => {
  const [modal, setModal] = useState({class: "", photo :{ urls: {}}})
  const favs = useSelector(state => state.favorites)
  useEffect(()=>{
    localStorage.setItem("favs", JSON.stringify(favs))
  }, [favs])

  return(
    <>
      <SearcherOfFavorites/>
      <FavoriteImageDisplayer setModal={setModal}/>
      <ModalPopup modal={modal} setModal={setModal}/>
    </>
  )
}

export default Favs;