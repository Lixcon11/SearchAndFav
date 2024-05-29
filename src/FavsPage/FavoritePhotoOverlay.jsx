/* eslint-disable react/prop-types */
import { Overlay } from "../App/Components/Overlay"


const FavoritePhotoOverlay = ({modalHandler, dowloadHandler, photo}) => {
    
    return(
        <Overlay>
            <img src="/src/App/images/download.png" className="icon" onClick={e => dowloadHandler(photo, e)}/>
            <div className="division"></div>
            <img onClick={e => modalHandler(photo, e)} src="/src/App/images/eye.png" className="icon"/>
        </Overlay>
    )
}

export default FavoritePhotoOverlay;