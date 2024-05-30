/* eslint-disable react/prop-types */

const SortBy = ({ functionToSortBy }) => {
    const clickHandler = (e) =>{
        functionToSortBy(e);
    }

    return(
        <>
            <div>
                <p>Sort by:</p>
                <div>
                    <button onClick={e =>clickHandler(e)}>Date</button>
                    <button onClick={e =>clickHandler(e)}>Height</button>
                    <button onClick={e =>clickHandler(e)}>Width</button>
                    <button onClick={e =>clickHandler(e)}>Likes</button>
                </div>
            </div>
        </>
    )
}

export default SortBy;