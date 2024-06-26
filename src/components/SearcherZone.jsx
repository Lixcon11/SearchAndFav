/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import  glass  from "../icons/magnify.png"


export const SearcherZone = ({children , theme, handler, placeholder}) => {
    return(
        <>
            <section className={`search-zone ${theme}`}>
                <h1><span>Search</span><span> & </span><span>Favs</span></h1>
                <form onSubmit={handler} className="searcher form-input">
                    <input type="text" name="input" placeholder={placeholder}/>
                    <button className="glass"><img src={glass} className="icon --small"/></button>
                </form>
                <div className="link-buttons">
                    <button className={`styledButton --searchButton ${theme}`}><Link to="/search">Search</Link></button>
                    <button className={`styledButton --favsButton ${theme}`}><Link to="/favs">Favs</Link></button>
                </div>
                {children}
            </section>
        </>
    )
}