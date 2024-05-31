/* eslint-disable react/prop-types */
import downloadImage from "../icons/download.png"
import FileSaver from 'file-saver';

export const Overlay = ({children, photo}) => {

    const clickHandler = () => {
        FileSaver.saveAs(photo.urls.full, `${photo.description ? photo.description: "Untiltled"}.jpg`)
    }

    return(
        <>
            <div className="overlay">
                <img src={downloadImage} className="icon" onClick={clickHandler}/>
                <div className="division"></div>
                {children}
            </div>
        </>
    )
}