/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const LinkButtons = ({theme}) => {
    return(
        <>
            <div className="link-buttons">
                <button className={`styledButton --searchButton ${theme}`}><Link to="/search">Search</Link></button>
                <button className={`styledButton --favsButton ${theme}`}><Link to="/favs">Favs</Link></button>
            </div>   
        </>
    )
}

export default LinkButtons;