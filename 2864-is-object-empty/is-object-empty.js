/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    
    let arrCheck = Array.isArray(obj)
    
    if (arrCheck) {
        return obj.length === 0
    }

    if (typeof obj === 'object') {
        return Object.keys(obj).length === 0
    }
};