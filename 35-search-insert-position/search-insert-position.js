/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        if (target === nums[i]) {
            return i
        } else {
            nums.push(target)
            nums.sort((a, b) => a - b);
            return nums.indexOf(target)
        }
    }
};