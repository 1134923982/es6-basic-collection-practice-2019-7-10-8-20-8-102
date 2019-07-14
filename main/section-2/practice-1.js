'use strict';

module.exports = function countSameElements(collection) {
    return Array.from(new Set(collection)).map(x=>{
        return {key:x,count:(collection.filter(y=>y===x).length)}
    })
}
