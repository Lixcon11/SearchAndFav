/* eslint-disable react/prop-types */

const Searcher = ({ handler, placeholder}) => {
    return (
        <>
            <form onSubmit={handler} className="searcher form-input">
                <button className="glass"><img src="/src/App/images/magnify.png" className="icon --small"/></button>
                <input type="text" name="input" placeholder={placeholder}/>
            </form>
        </>
    )
}

export default Searcher;