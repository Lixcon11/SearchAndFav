import { useSelector } from "react-redux";
import Body from "../App/Components/Body";
import FavoriteImageDisplayer from "./FavoriteImageDisplayer";
import { useEffect, useState } from "react";
import ModalPopup from "./ModalPopup";

const Favs = () => {
  const [modal, setModal] = useState({class: "", photo :{ urls: {}}})
  const favs = useSelector(state => state.favorites)
  useEffect(()=>{
    localStorage.setItem("favs", JSON.stringify(favs))
  }, [favs])

  return(
    <>
      <Body theme="--favsTheme"/>
      <section className="image-container">
        <FavoriteImageDisplayer setModal={setModal}/>
      </section>
      <ModalPopup modal={modal} setModal={setModal}/>
    </>
  )
}

export default Favs;