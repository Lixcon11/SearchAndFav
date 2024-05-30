const sortByWords = (objectArray, text) => {
    const strings = text.split(" ")
    const newArray = []
    
    for(const object of objectArray){
        let hasAll = true;
        strings.forEach(word => {
            if(!object.description.includes(word)){
                hasAll = false
            }
        })
        if(hasAll){
            newArray.push(object)
        }
    }

    return newArray;
}

export default sortByWords;