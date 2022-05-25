/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let absNums = [];
    for(let i=0;i<nums.length;i++){
        absNums.push(Math.pow(Math.abs(nums[i]),2));
    }
    
    return absNums.sort(function(a, b){return a-b});

};