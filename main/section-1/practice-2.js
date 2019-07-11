'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  return Array.from(
      new Set(collectionA.filter(item => new Set(collectionB[0]).has(item)))// [2]
  )
}
