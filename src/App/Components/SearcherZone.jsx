/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import glass from "../images/magnify.png"


const SearcherZone = ({children , theme, handler, placeholder}) => {
    return(
        <>
            <section className={`search-zone ${theme}`}>
                <h1><span className="search">Search</span><span className="middle"> & </span><span className="favs">Favs</span></h1>
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

export default SearcherZone;