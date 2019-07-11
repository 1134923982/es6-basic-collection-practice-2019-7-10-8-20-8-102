'use strict';

module.exports = function countSameElements(collection) {
  const map = new Map();
  collection.forEach(item=>{
    if(map.has(item)){
      let num = map.get(item);
      map.set(item, num+1);
    }else {
      map.set(item, 1);
    }
  });
  const a = Array.from(map);
  return a.map(item=>{
    return {key:item[0], count: item[1]}
  })
}
