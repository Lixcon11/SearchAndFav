/* eslint-disable react/prop-types */

import { useState } from "react"
import { paths } from "./main";



const App = ({colorModTheme}) => {
  const componentIs = window.location.pathname;
  const [text, setText] = useState("");
  console.log(componentIs === `/${paths.forFavs}` ? colorModTheme: "")
  const formEventHandler = event => {
    event.preventDefault();
    setText(event.target.input.value);
  }
  
  return (
    <>
    <h1 className={`title ${colorModTheme}`}>Title</h1>
    <div>
      <form onSubmit={formEventHandler}>
        <input type="text" name="input"/>
      </form>
      <button className={`styledButton ${componentIs === `/${paths.forSearch}` ? colorModTheme: ""}`}>Search</button>
      <button className={`styledButton ${componentIs === `/${paths.forFavs}` ? colorModTheme: ""}`}>Favs</button>
      <p>{text}</p>
      </div>
    </>
  )
  
}

export default App;