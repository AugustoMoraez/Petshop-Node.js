type prop = "" | "dog" | "all" | "cat" | "fish";

export const returnActive = (option:prop) => {
    let returnObj = {
        all:false,
        cat:false,
        fish:false,
        dog:false
    }
    if(option !== ""){
        returnObj[option] = true;
    }
    return returnObj;
}