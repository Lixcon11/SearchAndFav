export const sortData = data => {
    let newData = [];

    for(const object of data) {
        const newObject = {}
        newObject.likes = object.likes;
        newObject.id = object.id;
        newObject.height = object.height;
        newObject.width = object.width;
        newObject.description = object.description;
        newObject.urls = object.urls;
        newData.push(newObject)
    }

    return newData;
}