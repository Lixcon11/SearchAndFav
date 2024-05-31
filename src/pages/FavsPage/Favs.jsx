import { useSelector } from "react-redux";
import { FavoriteImageDisplayer } from "./FavoriteImageDisplayer";
import { useEffect, useState } from "react";
import { ModalPopup } from "./ModalPopup";
import {SearcherZone } from "../../components/SearcherZone";

export const Favs = () => {
  const theme = "--favsTheme";
  const placeholder = "Look at favs"
  const favs = useSelector(state => state.favorites)
  const [modal, setModal] = useState({class: "", photo :{ urls: {}}})
  const [preferences, setPreferences] = useState({text: "", sortBy: "date"})

  useEffect(()=>{
    localStorage.setItem("favs", JSON.stringify(favs))
  }, [favs])

  const formEventHandler = event => {
    event.preventDefault();
    setPreferences(state => ({...state, text:event.target.input.value}))
  }
  const functionToSortBy = event => {
    setPreferences(state=> ({...state, sortBy: event.target.innerText.toLowerCase()}))
  }

  return(
    <>
      <SearcherZone theme={theme} handler={formEventHandler} placeholder={placeholder}>
        <div className="sort-by">
          <p>Sort by:</p>
          <div>
              <button onClick={functionToSortBy} className="styledButton --sortButton">Date</button>
              <button onClick={functionToSortBy} className="styledButton --sortButton">Height</button>
              <button onClick={functionToSortBy} className="styledButton --sortButton">Width</button>
              <button onClick={functionToSortBy} className="styledButton --sortButton">Likes</button>
          </div>
        </div>
      </SearcherZone>
      <FavoriteImageDisplayer setModal={setModal} preferences={preferences}/>
      <ModalPopup modal={modal} setModal={setModal}/>
    </>
  )
};