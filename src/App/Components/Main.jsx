import { useEffect, useState } from "react"
import { clean, data, getThemeAndPath } from "../Features/globalData/globalDataSlice";
import { Link } from "react-router-dom";

const Main = () => {
  const [text, setText] = useState("");

  const formEventHandler = event => {
    event.preventDefault();
    setText(event.target.input.value);
  }
  const [theme, path] = getThemeAndPath();
  useEffect(()=>{
    const [tilte, searchButton, favsButton] = ["#title", "#searchButton", "#favsButton"]
    clean([tilte, searchButton, favsButton])
    document.querySelector(tilte).classList.add(theme);
    if(data.forSearch.path=== path){
      document.querySelector(searchButton).classList.add(theme);
    }
    else{
      document.querySelector(favsButton).classList.add(theme);
    }
  },[path, theme])

  return (
    <>
    <h1 className="title" id="title">Title</h1>
      <div>
        <form onSubmit={formEventHandler}>
          <input type="text" name="input"/>
        </form>
        <button className="styledButton" id="searchButton"><Link to="/search">Search</Link></button>
        <button className="styledButton" id="favsButton"><Link to="/favs">Favs</Link></button>
        <p>{text}</p>
      </div>
    </>
  )
}

export default Main;