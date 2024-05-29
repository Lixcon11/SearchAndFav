/* eslint-disable react/prop-types */

const ImageDisplayerZone = ({ children }) => {
    return(
        <>
            <section className="image-container">
                {children}
            </section>
        </>
    )
}

export default ImageDisplayerZone;