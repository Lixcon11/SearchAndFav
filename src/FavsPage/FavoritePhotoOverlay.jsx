/* eslint-disable react/prop-types */
import Overlay from "../App/Components/Overlay"
import eye from "../App/images/eye.png"

const FavoritePhotoOverlay = ({ setModal, photo }) => {

    const modalHandler = () => {
        setModal({class: "visible", "photo": {...photo}})
    }

    return(
        <>
            <Overlay>
                <img onClick={modalHandler} src={eye} className="icon"/>
            </Overlay>
        </>
    )
}

export default FavoritePhotoOverlay;