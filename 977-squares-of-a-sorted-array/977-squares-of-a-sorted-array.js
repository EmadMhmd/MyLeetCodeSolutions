/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let absNums = [];
    for(let i=0;i<nums.length;i++){
        absNums.push(Math.pow(Math.abs(nums[i]),2));
    }
    
    const sortedArr = absNums.sort(function(a, b){return b - a});
    return sortedArr.reverse()
};