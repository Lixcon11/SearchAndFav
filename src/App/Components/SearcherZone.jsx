/* eslint-disable react/prop-types */

const SearcherZone = ({children , theme}) => {
    return(
        <>
            <section className={`search-zone ${theme}`}>
                {children}
            </section>
        </>
    )
}

export default SearcherZone;