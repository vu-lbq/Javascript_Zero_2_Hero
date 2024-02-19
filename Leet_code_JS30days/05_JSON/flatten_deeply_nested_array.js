/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    const result = [];
    
    function flattenHelper(arr, depth) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i]) && depth < n) {
                flattenHelper(arr[i], depth + 1);
            } else {
                result.push(arr[i]);
            }
        }
    }
    
    flattenHelper(arr, 0);
    
    return result;
};