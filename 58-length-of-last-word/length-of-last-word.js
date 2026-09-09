/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let strArr = s.trim().split(' ')
    return strArr[strArr.length - 1].length
};