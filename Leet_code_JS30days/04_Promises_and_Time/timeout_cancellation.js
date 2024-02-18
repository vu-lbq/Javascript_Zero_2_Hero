/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {    
    let timerId = setTimeout(fn, t, ...args);
    let cancelFn = () => clearTimeout(timerId);

    return cancelFn;
};

var cancellable = function(fn, args, t) {
    const timerId = setTimeout(fn, t, ...args);
        const cancelFn = () => {
            clearTimeout(timerId);
    }
    return cancelFn;
};

var cancellable = function(fn, args, t) {
    fn(...args);
    const intervalFn = setInterval(fn,t,...args);
    return  () => clearInterval(intervalFn)
};
/**
 *  const result = [];
 *
 *  const fn = (x) => x * 5;
 *  const args = [2], t = 20, cancelTimeMs = 50;
 *
 *  const start = performance.now();
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start);
 *      result.push({"time": diff, "returned": fn(...argsArr)});
 *  }
 *       
 *  const cancel = cancellable(log, args, t);
 *
 *  const maxT = Math.max(t, cancelTimeMs);
 *           
 *  setTimeout(cancel, cancelTimeMs);
 *
 *  setTimeout(() => {
 *      console.log(result); // [{"time":20,"returned":10}]
 *  }, maxT + 15)
 */