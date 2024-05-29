import { useSelector } from "react-redux";
import Body from "../App/Components/Body";
import SearchImageDisplayer from "./SearchImageDisplayer";
import { useEffect } from "react";

const Search= () => {
  const favs = useSelector(state => state.favorites)
  useEffect(()=>{
    localStorage.setItem("favs", JSON.stringify(favs))
  }, [favs])
  return (
    <>
      <Body theme="--searchTheme"/>
      <section className="image-container">
        <SearchImageDisplayer/>
      </section>
    </>
  )
}

export default Search;