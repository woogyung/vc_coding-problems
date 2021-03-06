module.exports = function (value, precision) {
  var suffixes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  var factor   = Math.pow(10, precision > 0 ? precision : 2);
  var suffix   = 0;

  while (value >= 1024 && suffixes[++suffix]) {
    value /= 1024;
  }

  // Return the number rounded to precision.
  return (Math.round(value * factor) / factor) + ' ' + suffixes[suffix];
};
