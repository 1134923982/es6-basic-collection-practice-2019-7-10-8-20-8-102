'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  return Array.from(
      new Set(collectionA.filter(v => new Set(objectB.value).has(v)))
  )
}
