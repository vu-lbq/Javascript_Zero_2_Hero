/**
Given a function fn, return a memoized version of that function.
A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.
 */

/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    
    const cache = new Map(); 

    return function(...args) {
        const key = JSON.stringify(args); 

        if (cache.has(key)) {
            return cache.get(key);
        } else {
            const result = fn(...args);
            cache.set(key, result);
            return result;
        }
    };
}

function memoize(fn) {
    const cache = {};
    
    return function(...args) {
      const key = JSON.stringify(args);
      
      if (cache[key] !== undefined) {
        return cache[key];
      }
      
      const result = fn(...args);
      cache[key] = result;
      
      return result;
    };
  }
  
  
  /** 
   * let callCount = 0;
   * const memoizedFn = memoize(function (a, b) {
   *	 callCount += 1;
   *   return a + b;
   * })
   * memoizedFn(2, 3) // 5
   * memoizedFn(2, 3) // 5
   * console.log(callCount) // 1 
   */