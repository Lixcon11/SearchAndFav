/* eslint-disable react/prop-types */

import { useEffect, useState } from "react"
import { data, getThemeAndPath } from "./App/Features/globalData/globalDataSlice";

const App = () => {
  const [text, setText] = useState("");

  const formEventHandler = event => {
    event.preventDefault();
    setText(event.target.input.value);
  }
  
  useEffect(()=>{
    const [theme, path] = getThemeAndPath();
    document.querySelector("#title").classList.add(theme);
    if(data.forSearch.path=== path){
      document.querySelector("#searchButton").classList.add(theme);
    }
    else{
      document.querySelector("#favsButton").classList.add(theme);
    }
  })

  return (
    <>
    <h1 className="title" id="title">Title</h1>
    <div>
      <form onSubmit={formEventHandler}>
        <input type="text" name="input"/>
      </form>
      <button className="styledButton" id="searchButton">Search</button>
      <button className="styledButton" id="favsButton">Favs</button>
      <p>{text}</p>
      </div>
    </>
  )
  
}

/*
export const getTheme = (path) => {
  for(const element in globalData){
      if(`/${element.path}` === path){
          return element.theme;
      }
  }
}
*/
export default App;