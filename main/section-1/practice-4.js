'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  const collection = Array.from(
      new Set(collectionA.filter(item => new Set(objectB.value).has(item.key)))
  )
  return collection.map(item=>item.key);
}
