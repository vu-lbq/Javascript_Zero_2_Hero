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

/**
 * GEMINI 
 * 
 * class ExpiringCache {
    constructor() {
        this.cache = {}; // Store key-value pairs and timeout references
    }

    set(key, value, duration) {
        if (this.hasUnexpiredKey(key)) {
        clearTimeout(this.cache[key].timeoutId); // Clear existing timeout if key exists
        }

        const expirationTime = Date.now() + duration;
        this.cache[key] = { value, expirationTime };

        // Set a timeout to clear the key after expiration
        this.cache[key].timeoutId = setTimeout(() => {
        delete this.cache[key];
        }, duration);

        return true; // Key already existed
    }

    get(key) {
        const entry = this.cache[key];
        if (entry && entry.expirationTime >= Date.now()) {
        return entry.value;
        } else {
        return -1; // Key not found or expired
        }
    }

    count() {
        return Object.keys(this.cache)
        .filter((key) => this.cache[key].expirationTime >= Date.now())
        .length;
    }

    hasUnexpiredKey(key) {
        const entry = this.cache[key];
        return entry && entry.expirationTime >= Date.now();
    }
}

 */