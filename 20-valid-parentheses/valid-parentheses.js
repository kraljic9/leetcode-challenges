/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []
   
    for (let char of s) {
        if (char === '(' || char === "{" || char === '[') {
            stack.push(char)
        } else {
            let stackPop = stack.pop();

            if (!stackPop) return false

            if (stackPop === '(' && char !== ')') {
                return false
            } else if (stackPop === '{' && char !== '}') {
                return false
            } else if (stackPop === '[' && char !== ']') {
                return false
            }
        }
    }

    return stack.length === 0
}