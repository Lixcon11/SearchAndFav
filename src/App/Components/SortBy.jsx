/* eslint-disable react/prop-types */

const SortBy = ({ functionToSortBy }) => {
    const clickHandler = (e) =>{
        functionToSortBy(e);
    }

    return(
        <>
            <div className="sort-by">
                <p>Sort by:</p>
                <div>
                    <button onClick={e =>clickHandler(e)} className="styledButton --sortButton">Date</button>
                    <button onClick={e =>clickHandler(e)} className="styledButton --sortButton">Height</button>
                    <button onClick={e =>clickHandler(e)} className="styledButton --sortButton">Width</button>
                    <button onClick={e =>clickHandler(e)} className="styledButton --sortButton">Likes</button>
                </div>
            </div>
        </>
    )
}

export default SortBy;