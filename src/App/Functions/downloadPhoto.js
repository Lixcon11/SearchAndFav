import FileSaver from 'file-saver';

const downloadPhoto = photo => {
    FileSaver.saveAs(photo.urls.full, `${photo.description ? photo.description: "Untiltled"}.jpg`)
}

export default downloadPhoto;