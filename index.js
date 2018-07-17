fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, iteratee) {
      for (let property in collection) {
        iteratee(collection[property], property, collection);
      }
      return collection
    },

    map: function(collection, iteratee) {
      // const returnCollection = Array.isArray(collection) ? Object.assign([], collection) : Object.assign({}, collection);
      const returnCollection = []
      for (let property in collection) {
        returnCollection.push(iteratee(collection[property], property, collection));
      }
      return returnCollection;
    },

    reduce: function(collection, iteratee, acc) {
      for (let value of collection) {
        acc = iteratee(acc, value, collection)
      };
      return acc;
    },

    find: function(collection, predicate) {
      for (let value of collection) {
        if (predicate(value)) {
          return value;
        }
      }
      return undefined;
    },

    filter: function(collection, predicate) {
      const returnArray = [];
      for (let value of collection) {
        if (predicate(value)) {
          returnArray.push(value);
        };
      };
      return returnArray;
    },

    size: function(collection) {
      let counter = 0
      for (let item in collection) {
        counter++;
      };
      return counter;
    },

    first: function(array, n = 1) {
      if (n === 1)
        return array[0]

      return array.slice(0, n);
    },

    last: function(array, n = 1) {
      if (n === 1)
        return array[array.length - 1]

      return array.slice(-n)
    },

    compact: function(array) {
      const returnArray = [];
      for (let value of array) {
        if (!!value)
          returnArray.push(value);

      }
      return returnArray;
    },

    sortBy: function(array, iteratee) {
      const copyArray = Object.assign([], array);
      copyArray.sort(function(a, b) {
        if (iteratee(a) > iteratee(b))
          return 1
        else if (iteratee(a) === iteratee(b))
          return 0
        else
          return -1
      });
      return copyArray;
    },

    flatten: function(array, shallow) {
      const flattenedArray = []
      for(el of array) {
        if (Array.isArray(el)) {
          if (shallow) {
            el.forEach(function(x) {
              flattenedArray.push(x);
            })
          } else {
            fi.flatten(el).forEach(
            function(x) {
              flattenedArray.push(x);
            }
          )}
        } else {
          flattenedArray.push(el);
        }
      }
      return flattenedArray;
    },

    uniq: function(array, isSorted, iteratee){
      const returnArray = [];
      const hasArray = [];

      for (let index in array) {
        let value = ((!!iteratee) ? iteratee(array[index]) : array[index])

        if (!hasArray.includes(value)) {
          returnArray.push(array[index])
          hasArray.push(value)
        }
      }
      return returnArray
    },

    keys: function(object) {
      const returnArray = [];

      for (let attr in object) {
        returnArray.push(attr)
      }
      return returnArray;
    },

    values: function(object){
      const returnArray = [];

      for (let attr in object) {
        returnArray.push(object[attr])
      }
      return returnArray;
    },

    functions: function(object) {
      const returnArray = [];

      for (let attr in object) {
        if (typeof(object[attr]) === "function") {
          returnArray.push(attr);
        }
      }
      return returnArray;
    },




  }
})()

fi.libraryMethod()
