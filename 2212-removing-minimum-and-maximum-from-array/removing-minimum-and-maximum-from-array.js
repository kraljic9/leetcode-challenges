/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeletions = function(nums) {
    let a = Math.max(...nums)
    let b = Math.min(...nums)

    let indexA = nums.indexOf(a)
    let indexB = nums.indexOf(b)

    let i = Math.min(indexA, indexB);
    let j = Math.max(indexA, indexB);
    let n = nums.length;

    let front = j + 1;
    let back = n - i;
    let frontAndBack = (i + 1) + (n - j) 

    return Math.min(front, back, frontAndBack)
};