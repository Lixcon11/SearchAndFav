import { useSelector } from "react-redux";
import SearchImageDisplayer from "./SearchImageDisplayer";
import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { fetchPhotoListThunk } from "../App/Features/search/searchThunk";
import SearcherZone from "../App/Components/SearcherZone";

const Search= () => {
  const theme = "--searchTheme";
  const placeholder = "Search new images"
  const favs = useSelector(state => state.favorites)
  const dispatch = useDispatch();

  useEffect(()=>{
    localStorage.setItem("favs", JSON.stringify(favs))
  }, [favs])

  const formEventHandler = event => {
    event.preventDefault();
    dispatch(fetchPhotoListThunk(event.target.input.value))
  }

  return (
    <>
      <SearcherZone theme={theme} handler={formEventHandler} placeholder={placeholder}/>
      <SearchImageDisplayer/>
    </>
  )
}

export default Search;