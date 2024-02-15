/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const map = function(arr, fn) {
    const transformedArr = [];
    for (let i = 0; i < arr.length; i++){
        transformedArr.push(fn(arr[i], i))
    }
    return transformedArr;
};

/**
 * var map = function(arr, fn) {
     return arr.map((element, index) => fn(element, index));
    };
 */