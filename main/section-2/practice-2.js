'use strict';

module.exports = function countSameElements(collection) {
    let map = new Map();
    collection.forEach(item=>{
        const a = item.split('-');
        if(map.has(a[0])){
            if (a.length === 1) {
                let num = map.get(item);
                map.set(item, num + 1);
            }else{
                let num = map.get(item);
                map.set(item, num + parseInt(a[1]));
            }
        }else {
            if (a.length === 1) {
                map.set(item, 1);
            }else{
                map.set(a[0], parseInt(a[1]));
            }
            //map.set(item, 1);
        }
    });
    let a = Array.from(map);
    return a.map(item=>{
        return {key:item[0], count: item[1]}
    })
}
