// Create a new flattened array
exports.newArray = function flatten (input) {
  var output = [];

  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      output = output.concat(flatten(arr[i]));
    } else {
      output.push(arr[i]);
    }
  }

  return output;
};

// In place array flatten
exports.inPlace = function (array) {
  var i = 0;

  while (i < array.length) {
    if (Array.isArray(array[i])) {
      array.splice.apply(array, [i, 1].concat(array[i]));
    } else {
      i += 1;
    }
  }

  return array;
};

// Flatten array using ES5 reduce method
exports.es5 = function flatten (array) {
  return array.reduce(function (arr, val) {
    return arr.concat(Array.isArray(val) ? flatten(val) : val);
  }, []);
};
