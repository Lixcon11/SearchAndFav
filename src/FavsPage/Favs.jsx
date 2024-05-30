import { useSelector } from "react-redux";
import FavoriteImageDisplayer from "./FavoriteImageDisplayer";
import { useEffect, useState } from "react";
import ModalPopup from "./ModalPopup";
import SearcherOfFavorites from "./SearcherOfFavorites";

const Favs = () => {
  const favs = useSelector(state => state.favorites)
  const [modal, setModal] = useState({class: "", photo :{ urls: {}}})
  const [preferences, setPreferences] = useState({text: "", sortBy: "date"})

  useEffect(()=>{
    localStorage.setItem("favs", JSON.stringify(favs))
  }, [favs])

  return(
    <>
      <SearcherOfFavorites setPreferences={setPreferences}/>
      <FavoriteImageDisplayer setModal={setModal} preferences={preferences}/>
      <ModalPopup modal={modal} setModal={setModal}/>
    </>
  )
}

export default Favs;