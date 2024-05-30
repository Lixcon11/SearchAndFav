import { useSelector } from "react-redux";
import SearcherOfSearch from "./SearcherOfSearch";
import SearchImageDisplayer from "./SearchImageDisplayer";
import { useEffect } from "react";

const Search= () => {
  const favs = useSelector(state => state.favorites)

  useEffect(()=>{
    localStorage.setItem("favs", JSON.stringify(favs))
  }, [favs])

  return (
    <>
      <SearcherOfSearch/>
      <SearchImageDisplayer/>
    </>
  )
}

export default Search;