export const updateObjInArray =(item, itemId, objPropName, newObjProps)=> {
    return item.map( u => {
        if(u[objPropName] === itemId) {
            return {...u, ...newObjProps}
        } else {
            return u;
        }
    })
}