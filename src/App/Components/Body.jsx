/* eslint-disable react/prop-types */
import { useState } from "react"
import { Link } from "react-router-dom";

const Body = ({theme}) => {
  const [text, setText] = useState("");

  const formEventHandler = event => {
    event.preventDefault();
    setText(event.target.input.value);
  }
  
  return (
    <>
    <h1 className={`title ${theme}`} id="title">Title</h1>
      <div>
        <form onSubmit={formEventHandler}>
          <input type="text" name="input"/>
        </form>
        <button className={`styledButton --searchButton ${theme}`} id="searchButton"><Link to="/search">Search</Link></button>
        <button className={`styledButton --favsButton ${theme}`} id="favsButton"><Link to="/favs">Favs</Link></button>
        <p>{text}</p>
      </div>
    </>
  )
}

export default Body;