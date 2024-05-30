const filterByWords = (arrayOfobjects, text) => {
    const strings = text.split(" ")
    const newArray = []
    
    for(const object of arrayOfobjects){
        let hasAll = true;

        if(object.description){
            strings.forEach(word => {
                if(!object.description.includes(word)){
                    hasAll = false
                }
            })
            if(hasAll){
                newArray.push(object)
            }
        }
    }

    return newArray;
}

export default filterByWords;