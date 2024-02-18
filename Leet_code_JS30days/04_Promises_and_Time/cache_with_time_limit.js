var TimeLimitedCache = function() {
    this.m=new Map();
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    const e = this.m.get(key);
    if (e) e.cancel();
    const timeout = setTimeout(()=>{this.m.delete(key)}, duration);
    this.m.set(key, {value, cancel: ()=>clearTimeout(timeout)});
    return !!e;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    const e = this.m.get(key);
    if (e) return e.value;
    return -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
  return this.m.size;    
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */