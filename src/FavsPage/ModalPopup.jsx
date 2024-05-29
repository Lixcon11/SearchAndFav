/* eslint-disable react/prop-types */

import { useDispatch} from "react-redux"
import { changeDescription, removeFavorite } from "../App/Features/favorites/favoritesSlice"

const ModalPopup = ({ modal, setModal }) => {
    const dispath = useDispatch()

    const handlerSubmit = (event) => {
        event.preventDefault()

        dispath(changeDescription({text: event.target.input.value, photo: {...modal.photo}}))
        setModal({...modal, photo: {...modal.photo, description: event.target.input.value}})
        event.target.input.value = "";
    }

    const unfavHandler = () => {
        dispath(removeFavorite(modal.photo))
        setModal({class: "", photo :{ urls: {}}})
    }

    const closeHandler = () => {
        setModal({class: "", photo :{ urls: {}}})
    }
    return(
        <>
            <article className={`popup --${modal.class}`}>
                <div className="content">
                    <div >
                        <img className="image"src={modal.photo.urls.regular}/>
                    </div>
                    <div className="info">
                        <ul>
                            <li>Title: {modal.photo.description ? modal.photo.description: "No title yet!"}</li>
                            <li>Size: {modal.photo.width}x{modal.photo.height}</li>
                            <li>Likes: {modal.photo.likes}</li>
                            <li>Date: {modal.photo.date}</li>
                        </ul>
                        <div className="title-modify">
                            <form onSubmit={handlerSubmit}>
                                <input type="text" name="input"></input>
                                <button>Save</button>
                            </form>
                        </div>
                        <button className="__unfav" onClick={unfavHandler}>Unfav</button>
                    </div>
                    <button className="close" onClick={closeHandler}>X</button>
                </div>
            </article>
        </>
    )
}

export default ModalPopup;