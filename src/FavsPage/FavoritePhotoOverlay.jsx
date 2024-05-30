/* eslint-disable react/prop-types */
import Overlay from "../App/Components/Overlay"
import download from "../App/images/download.png"
import eye from "../App/images/eye.png"

const FavoritePhotoOverlay = ({ modalHandler, dowloadHandler, photo }) => {
    return(
        <>
            <Overlay>
                <img src={download} className="icon" onClick={e => dowloadHandler(photo, e)}/>
                <div className="division"></div>
                <img onClick={e => modalHandler(photo, e)} src={eye} className="icon"/>
            </Overlay>
        </>
    )
}

export default FavoritePhotoOverlay;