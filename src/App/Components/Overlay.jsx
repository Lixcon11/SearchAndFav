/* eslint-disable react/prop-types */

const Overlay = ({children}) => {
    return(
        <>
            <div className="overlay">
                {children}
            </div>
        </>
    )
}

export default Overlay;