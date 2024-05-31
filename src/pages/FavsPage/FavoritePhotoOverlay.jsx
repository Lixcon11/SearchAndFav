/* eslint-disable react/prop-types */
import { Overlay } from "../../components/Overlay"
import eye from "../../icons/eye.png"

export const FavoritePhotoOverlay = ({ setModal, photo }) => {

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