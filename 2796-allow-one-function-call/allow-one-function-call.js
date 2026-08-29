/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let result = 0
    let hasBeenCalled = false;
    return function(...args){
        if (!hasBeenCalled) {
            hasBeenCalled = true
            return fn(...args)
        } else {
            return
        }
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
