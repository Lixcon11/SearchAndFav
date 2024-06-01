export const sortByPreference = (arrayOfobjects, toSortBy) =>{
    const toBeSorted = [...arrayOfobjects];
    const sortedArray = [toBeSorted.shift()];
    
    toBeSorted.map(object => {
        let isLast = true;

        for(let i = 0; i < sortedArray.length;i++){
            if(sortedArray[i][toSortBy] < object[toSortBy]){
                sortedArray.splice(i, 0, object)
                isLast = false;
                break;
            }
        }
        if(isLast){
            sortedArray.push(object)
        }
    })

    return sortedArray;
}