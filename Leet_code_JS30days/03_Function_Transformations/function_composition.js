/** Complexity O(1)
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    return function(x) {
        for(let i=functions.length-1; i>=0; i--){
            x = functions[i](x)
        }
        return x;
    }
};
  
  /**
   * const fn = compose([x => x + 1, x => 2 * x])
   * fn(4) // 9
   */

  /** Complexity O(n)
var compose = function(functions) {
	if (functions.length === 0) {
    return function(x) { return x; };
  }

  return functions.reduceRight(function(prevFn, nextFn) {
    return function(x) {
      return nextFn(prevFn(x));
    };
  });

};
   */