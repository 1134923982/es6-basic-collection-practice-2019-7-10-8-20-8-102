'use strict';

module.exports = function summarySameElements(collection) {
  let map = new Map();
  collection.forEach(item=>{
    const a = item.split(/[^0-9, a-z]/);
    if(map.has(a[0])){
      if (a.length === 1) {
        let num = map.get(item);
        map.set(item, num + 1);
      }else{

        let num = map.get(a[0]);
        map.set(a[0], num + parseInt(a[1]));
      }
    }else {
      if (a.length === 1) {
        map.set(item, 1);
      }else{
        map.set(a[0], parseInt(a[1]));
      }
    }
  });
  let a = Array.from(map);
  return a.map(item=>{
    return {name:item[0], summary: item[1]}
  })
}
