export const parseImage = data => {
    let newData = [];

    data.map(object => {
        const newObject = {}
        newObject.likes = object.likes;
        newObject.id = object.id;
        newObject.height = object.height;
        newObject.width = object.width;
        newObject.description = object.description;
        newObject.urls = object.urls;
        newData.push(newObject)
    })

    return newData;
}