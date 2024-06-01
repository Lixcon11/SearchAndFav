/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux"
import { changeDescription, removeFavorite } from "../../features/favorites/favoritesSlice"

export const ModalPopup = ({ modal, setModal }) => {
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
                    <img src={modal.photo.urls.regular}/>
                    <div className="info">
                        <ul>
                            <li>Title: {modal.photo.description ? modal.photo.description: "Untiltled"}</li>
                            <li>Size: {modal.photo.width}x{modal.photo.height}</li>
                            <li>Likes: {modal.photo.likes}</li>
                            <li>Date: {modal.photo.date}</li>
                        </ul>
                        <form onSubmit={handlerSubmit} className="form-input title-modify">
                            <input type="text" name="input" placeholder="Change Title to..."></input>
                            <button className="styledButton">Save</button>
                        </form>
                    </div>
                    <button className="styledButton --unfavButton __unfav" onClick={unfavHandler}>Unfav</button>
                    <button className="close" onClick={closeHandler}>X</button>
                </div>
            </article>
        </>
    )
}