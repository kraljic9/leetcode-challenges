/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */

 var chunk = function(arr, size) {
    const newArr = []
    const copy = [...arr]

    while(copy.length > 0) {
        newArr.push(copy.splice(0, size))
    }

    return newArr
 }

/* 
var chunk = function(arr, size) {

    let newArr = [];

    for(let i = 0; i < arr.length; i += size) {
        newArr.push(arr.slice(i, i + size))
    }

    return newArr
}


*/