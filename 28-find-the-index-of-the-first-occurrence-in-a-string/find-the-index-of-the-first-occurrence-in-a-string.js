/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
   let needleLength = needle.length

    for(let i = 0; i < haystack.length; i++) {
        let stack = haystack.slice(i, i + needleLength)

        if (stack === needle) {
            return i
        }
    }

    return -1
};