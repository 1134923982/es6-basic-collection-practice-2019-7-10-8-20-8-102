'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  return collectionA.map(x=>x.key).filter(y=>objectB.value.includes(y));
}
