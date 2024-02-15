/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const array = [];
    for (var i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            array.push(arr[i]);
        }
    }
    return array
};

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
/** -----------use filter---------------------
var filter = function(arr, fn) {
    const filteredArray = [];
    arr.filter((a, i) => {
        if (fn(arr[i], i)) {
           return filteredArray.push(a);
        }
    })
    return filteredArray;
};
*/