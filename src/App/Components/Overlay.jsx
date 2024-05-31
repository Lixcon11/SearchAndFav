/* eslint-disable react/prop-types */
import downloadImage from "../images/download.png"
import downloadPhoto from "../Functions/downloadPhoto";

const Overlay = ({children, photo}) => {
    return(
        <>
            <div className="overlay">
                <img src={downloadImage} className="icon" onClick={e => downloadPhoto(photo, e)}/>
                <div className="division"></div>
                {children}
            </div>
        </>
    )
}

export default Overlay;