/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    if (Array.isArray(obj)) return obj.length === 0
    return Object.keys(obj).length === 0
};

var isEmpty = function(obj) {
    return (Object.keys(obj).length === 0)
};

var isEmpty = function(obj) {
    for (const _ in obj) return false;
    return true;
};

function isEmpty(obj) {
    // Optimized check for empty objects:
    return typeof obj === 'object' && Object.keys(obj).length === 0 ? true :
           // Optimized check for empty arrays:
           Array.isArray(obj) && obj.length === 0;
  }