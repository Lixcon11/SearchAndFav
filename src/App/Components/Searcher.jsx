/* eslint-disable react/prop-types */
import glass from "../images/magnify.png"

const Searcher = ({ handler, placeholder}) => {
    return (
        <>
            <form onSubmit={handler} className="searcher form-input">
                <input type="text" name="input" placeholder={placeholder}/>
                <button className="glass"><img src={glass} className="icon --small"/></button>
            </form>
        </>
    )
}

export default Searcher;