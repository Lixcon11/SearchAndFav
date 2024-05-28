/* eslint-disable react/prop-types */
import { useDispatch, useSelector} from "react-redux";
import { Link } from "react-router-dom";
import { fetchPhotoListThunk } from "../Features/search/searchThunk";
import { addFavorite } from "../Features/favorites/favoritesSlice";
import { useEffect } from "react";
//import { useState } from "react";

const Body = ({theme}) => {
  const dispatch = useDispatch();

  const formEventHandler = event => {
    event.preventDefault();
    dispatch(fetchPhotoListThunk(event.target.input.value))
  }

  return (
    <>
    <h1 className={`title ${theme}`}>Title</h1>
      <div>
        <form onSubmit={formEventHandler}>
          <input type="text" name="input"/>
        </form>
        <button className={`styledButton --searchButton ${theme}`}><Link to="/search">Search</Link></button>
        <button className={`styledButton --favsButton ${theme}`}><Link to="/favs">Favs</Link></button>
        
      </div>
    </>
  )
}

export default Body;