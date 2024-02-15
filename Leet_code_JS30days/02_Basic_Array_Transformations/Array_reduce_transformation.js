/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let accum = init
    for (let i = 0; i < nums.length; ++i) {
        accum = fn(accum, nums[i]);
    }
    return accum
};

/** FOR EACH
var reduce = function(nums, fn, init) {
  let acc = init;
  nums.forEach((element) => {
    acc = fn(acc, element);
  });
  return acc;
};

RECCURSION
var reduce = function(nums, fn, init) {
  let acc = init;
  nums.forEach((element) => {
    acc = fn(acc, element);
  });
  return acc;
};

REDUCE
var reduce = function(nums, fn, init) {
  return nums.reduce((acc, element) => fn(acc, element), init);
};
 */